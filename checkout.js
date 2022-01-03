document.querySelector("button").addEventListener("click",success)

function success(){
    alert("Your order is accepted")
}

let x=setTimeout(function success(){
    alert("Your order is being cooked!!")
},3000);

let y=setTimeout(function ready(){
    alert("Your order is ready!!")
},8000)

let z=setTimeout(function del(){
    alert("Order out for delivery")
},10000)

let a=setTimeout(function done(){
    alert("Order delivered")
},12000)