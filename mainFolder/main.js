const mathModule = require('./math-module.js')
const stringModule = require('./strings-module')


let sum = mathModule.sum (3,6)
console.log(sum);

let multiply = mathModule.multiply(2,5)
console.log(multiply)

let divide = mathModule.divide(20,10)
console.log(divide)

let square = mathModule.square(5)
console.log(square)

// String Modules
stringModule.firstChar("Hello")
stringModule.compare("Hello", "Bye")
stringModule.reverse("Hello")
