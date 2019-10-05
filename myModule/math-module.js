function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b
}
function square(a) {
  return Math.pow(a, 2)
}

module.exports = {
  sum, multiply, divide, square
}

const strMod = require('./strings-module.js')

console.log(strMod.firstChar("test"))