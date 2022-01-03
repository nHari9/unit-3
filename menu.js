

let container=document.getElementById("items");
let items=[]
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then(function(res){
    return res.json();
})
.then(function(res){ 
    let data=res.categories
    console.log(data)
    apppenditems(data)
})
.catch(function(err){
    console.log(err);
})

function apppenditems(d){
 d.forEach(function(el){
    let div =document.createElement("div");
    let img=document.createElement("img");
    img.src= el.strCategoryThumb
    let price=document.createElement("p")
    price.innerText="₹ "+ (Math.floor(Math.random()*500)+100);
    let name=document.createElement("p")
    name.innerText=el.strCategory;
    let btn=document.createElement("button")
    btn.innerHTML="Add to cart"
    let count =0;
    btn.addEventListener("click",function(){
        let p=document.querySelector(".count")
        count++;
        p.append(count)
    })
    div.append(img,price,name,btn)
    container.append(div)
})
}

