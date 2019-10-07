const mathModules = require("./math-module.js");
const stringsModule = require("/Users/sharrarkhan/Desktop/pursuitWork/core/unit3/week1/Pursuit-Core-npm-and-Modules-Lab/stringModule/strings-module.js")


const sumResults = mathModules.sum;
console.log(sumResults(32, 5));

const multiplyResults = mathModules.multiply;
console.log(multiplyResults(32, 5));

const divideResults = mathModules.divide;
console.log(divideResults(32, 5));

const exponentResults = mathModules.square;
console.log(exponentResults(32, 5));

const firstCharOfString = stringsModule.firstChar;
firstCharOfString("hello");

const compareStrings = stringsModule.compare;
compareStrings("hi", "hey");

const reverseString = stringsModule.reverse;
reverseString("hey");

module.exports = {
    sumResults,
    multiplyResults,
    divideResults,
}