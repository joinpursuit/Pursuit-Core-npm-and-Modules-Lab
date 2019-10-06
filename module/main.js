const mathModule = require("./math-module.js");
const stringModule = require("./string-module.js");

let firstUpper = stringModule.upperFirstLetter("apple");
console.log(firstUpper);

let lastUpper = stringModule.upperLastLetter("banana");
console.log(lastUpper);

let reverse = stringModule.reverseString("palindrome");
console.log(reverse);

let sum = mathModule.sum(4, 5);
console.log(sum);

let multiply = mathModule.multiply(2, 3)
console.log(multiply);

let divide = mathModule.divide(6, 3);
console.log(divide);

let square = mathModule.square(4)
console.log(square);
