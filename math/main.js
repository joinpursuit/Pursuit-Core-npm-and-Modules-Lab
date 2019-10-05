const mathModule = require('./math-module.js')
const stringModule = require('./strings-module.js')

const sum = mathModule.sum
const multiply = mathModule.multiply
const divide = mathModule.divide
const square = mathModule.square

const firstChar = stringModule.firstChar
const compare = stringModule.compare
const reverse = stringModule.reverse
const printStringXTimes = stringModule.printStringXTimes

// Math logs
console.log(sum(1,10))
console.log(multiply(2,4))
console.log(divide(20,4))
console.log(square(3))

console.log('--------------------------------------')

//String logs
console.log(firstChar('hsjekjehduek'))
console.log(compare('Owen','owen'))
console.log(reverse('reverse this string for me'))
console.log(printStringXTimes('hello',10))