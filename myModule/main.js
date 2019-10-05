const myMath = require('./math-module.js')
const strMod = require('./strings-module.js')
let sum = myMath.sum(10, 5);
let mult = myMath.multiply(2, 5); //returns 10
let div = myMath.divide(20, 10); //returns 2
let sq = myMath.square(5)
console.log(sum, mult, div, sq)

let first = strMod.firstChar("hello")
let second = strMod.compare("equal", "equal")
let third = strMod.reverse("this is reversed")
console.log(first, second, third)