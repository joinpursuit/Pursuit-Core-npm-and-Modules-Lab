const math = require("./math-module")
const string = require("./string-module")

let sum = math.sum(2,3)
let multiply = math.multiply(2,3)
let divide = math.divide(4,2)
let squared = math.square(5)

let firstChar = string.firstChar('jaiden')
let compare = string.compare("hi","h=i")
let reversed = string.reverse("jonathan")

console.log(sum);
console.log(multiply);
console.log(divide);
console.log(squared);
console.log(firstChar)
console.log(compare)
console.log(reversed)