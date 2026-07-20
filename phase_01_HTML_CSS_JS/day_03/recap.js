// var,let,const
//top of scope
// name,function,num --> hoisting
// console.log(name) //undefined
// console.log(num) //Reference Error --> Cannot access num before initialisation
// //Temproral Dead Zone
// var name = "Aman"

// let num = 10 //--> Temporal Dead Zone

// // let,const
// let num = 50
// num = 100
// const age = 18
// age = 25 //assignment to constant variable
// console.log("start")
// console.log("process")
// console.log("end")

// console.log("Start")


//fetch(url) -->time taking
// js handover this task to browser
let t=document.getElementById("Title")
setTimeout(function(){
    t.innerText="Maa, Mai Aagaya"
},4000)
let counter = 0
let hCount=document.getElementById("Count")
setInterval(function(){
    counter++
hCount.innerText=counter
},1000)
console.log("End")