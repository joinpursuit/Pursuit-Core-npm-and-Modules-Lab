
const mathModule = require('./math-module.js');

console.log(mathModule.sum(3,6))
console.log(mathModule.multiply(2,5))
console.log(mathModule.divide(20,10))
console.log(mathModule.square(5))

const stringsModule = require('./strings-module.js');
console.log(stringsModule.firstChar("hello"))
console.log(stringsModule.compare("hello", "hello"))
console.log(stringsModule.reverse("hello"))
