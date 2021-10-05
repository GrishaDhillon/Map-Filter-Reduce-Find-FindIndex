var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//************************** */
//using map()
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);
//***************************** */

//uisng foreach
// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

//**************************** */
//using filter()

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//******************************** */
//using foreach loop
// const newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

//******************************* */
//using Reduce()

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//****************************** */
//using forEach loop
// var newNumber = 0;
// numbers.forEach(function (num) {
//   newNumber += num;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumber);
//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newNumber);

// const myArray = [{x:100}, {x:200}, {x:300}];

// myArray.forEach((element, index, array) => {
//     console.log(element.x); // 100, 200, 300
//     console.log(index); // 0, 1, 2
//     console.log(array); // same myArray object 3 times
// });

import emojipedia from "./emojipedia";

//console.log(emojipedia);
var mean = 0;
emojipedia.map(function (obj) {
  mean = obj.meaning;
  console.log(mean.substring(0, 100));
});
