// let NaN; //undefined ,null
// console.log(true+6)
// console.log(false+5)
// Type Conversion
//Implicit Type Conversion
// console.log("5"+5) //automatic detected by js
// console.log("7"-2) //7 converted into number
// console.log("5"*2) //5 converted to number
// console.log("5"/2) //5 converted to number

//Expilict Type Conversion

// let num=10;
// let strNumber=String(num)
// console.log(typeof (num))
// console.log(typeof(strNumber))

// let str="123" //string
// let number=Number(str) //number

// let s="true" //
// console.log(typeof(Boolean(s))) //boolean

// let curr='400 Rs.' //string
// console.log(parseInt(curr)) //400

// let c='400 Rs.' //string
// console.log(parseInt(c)) //Nan

// let alp+Boolean("123abs") //true
// let ab=Boolean(undefined)

// let a = false;
// let b = 'Vivek';
// let c = 'Rishi';

// let z = a || b || c; //null

// console.log(z)

// // if all values are falsy in || statement then u get last falsy value

// let a = 'Prachi'
// let b = 'Vivek'
// let c = 'Rishi'

// let z = a && b && c; //Rishi
// //isAuthenticated && isAdmin && showUIPage
// console.log(z);

//undefined
// let user="Hello";
// console.log(user ?? "The value is not Defined");

// img src= "" ,alt=""

// For Loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let obj = {
//     name:"Aman",
//     age:20,
//     address:"Shimla"
    
// }

// for(let key in obj) {
//     console.log("Keys here ", key)
//     console.log("values ",obj[key])
// }

const subjects = ['javascript', 'html', 'css'];

for (let subject of subjects) {
    console.log(subject); ["javascript", "html", "css"]
}
