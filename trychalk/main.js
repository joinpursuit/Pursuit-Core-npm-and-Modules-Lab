let m = require('./math-module.js');
let s = require('./strings-module.js');
console.log(m.multiply(2, 5)); //returns 10
console.log(m.divide(20, 10)); //returns 2
console.log(m.square(5)); //

console.log(s.firstChar('michael'));
console.log(s.compare('michael', 'Michael'));
console.log(s.reverse('michael'));