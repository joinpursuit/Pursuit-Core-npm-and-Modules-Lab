const sum = (num1, num2) => num1+num2
const multiply = (num1, num2) => num1*num2
const divide = (num1, num2) => num1/num2
const square = num1 => num1*num1

module.exports = { 
    sum,
    multiply,
    divide,
    square 
}

const {
    firstChar,
    compare,
    reverse,
    returnLastChar
} = require("./strings-module.js")

returnLastChar("hello")
