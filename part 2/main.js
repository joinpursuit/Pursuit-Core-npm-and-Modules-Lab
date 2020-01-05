const { sum, multiply, divide, square } = require("./math-module.js")

const sum2 = (a, b) => {
  console.log(sum(a, b))
}
const multiply2 = (a, b) => {
  console.log(multiply(a, b))
}
const divide2 = (a, b) => {
  console.log(divide(a, b))
}
const square2 = a => {
  console.log(square(a))
}

sum2(3, 6)
multiply2(2, 5)
divide2(20, 10)
square2(5)

const {
  firstChar,
  compare,
  reverse,
  returnLastChar
} = require("./strings-module.js")

returnLastChar("hello")
