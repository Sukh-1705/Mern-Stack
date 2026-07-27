// // // //foreach, map, filter, reduce, sort ---> hof, array methods

// // // // let arr=["Javascript", "HTML", "CSS",];
// // // // console.log(arr[1]);
// // // // //length
// // // // console.log(arr.length);

// // // // let a = ["HTML", "CSS", "JS", "React",];
// // // // let s = a.toString();
// // // // console.log(s);

// // // let a = ["HTML", "CSS", "JS", "React",];
// // // //if you want to combine the array elements with a specific separator, you can use the join method
// // // console.log(a.join(" | "));

// // let a1 = [11, 12, 13];
// // let a2 = [14, 15, 16];
// // let a3 = [17, 18, 19];
// // let newArr = a1.concat(a2, a3); // to combine multiple arrays into a single array
// // console.log(newArr);

// // let a = [10, 20, 30, 40, 50];
// // a.push(60); // adds an element to the end of the array
// // console.log(a);

// //unshift

// // let arr = [30, 50, 70];
// // arr.unshift(10, 20); // adds elements to the beginning of the array
// // console.log(arr);

// //shift delete the first element of the array
// let a = [10, 20, 30, 40, 50];
// a.shift(); 
// console.log(a);
// //pop will remove the last element
// //spice --> removes elements from an array and (optionally) replaces them
// let a = [10, 20, 30, 40, 50];
// a.splice(2, 1); // removes 1 element at index 2
// // [20, 50]
// console.log(a);

// let a = [10, 20, 30, 40, 50];
// let res= a.slice(2,5)
// console.log(res); // [30, 40, 50]  slice will return a new array with the selected elements

let a = [10, 20, 30, 40, 50];
a.reverse(); // reverses the order of the elements in the array
console.log(a); 



