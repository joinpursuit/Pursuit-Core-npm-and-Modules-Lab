const sum = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const square = (num) => num * num;

module.exports = {
    sum,
    multiply,
    divide,
    square
}

let myStrFunctions = require('./strings-module.js');

let firstCharact = myStrFunctions.firstChar('try this')
console.log(firstCharact)