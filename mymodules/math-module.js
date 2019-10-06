const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const square = (n) => {
    return Math.pow(n, 2);
}

module.exports = {
    sum,
    multiply,
    divide,
    square,
}

let stringThing = require("./strings-module");

let secretMessage = stringThing.threeLettersBack("All this math is fake I don't know what I'm doing");
console.log(secretMessage)