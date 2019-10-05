const math = require('./math-module.js')
const string = require('./strings-module.js')

let summation = math.sum(5, 5)
let multiply = math.multiply(3, 4)
let square = math.square(5)

console.log(summation);
console.log(multiply);
console.log(square);


let firstChar = string.firstChar('string')
let compare = string.compare('string', 'string')
let reverse = string.reverse('strings hello')

console.log(firstChar);
console.log(compare);
console.log(reverse);