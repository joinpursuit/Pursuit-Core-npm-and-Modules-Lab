//import {sum} from "./math-module";


const {sum, multiply,divide,square} = require("./math-module.js")

let num = sum(4,5)
console.log(num)

let multiply2 = multiply(4,5)
let divide2 = divide(4,5)
let square2 = square(5)

console.log(multiply2)
console.log(divide2)
console.log(square2)
