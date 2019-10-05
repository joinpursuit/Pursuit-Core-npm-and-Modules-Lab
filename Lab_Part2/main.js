let myMath = require('./math-module.js');
let myStrFunctions = require('./strings-module.js');

let sum = myMath.sum(3, 4);
console.log(sum);

let mult = myMath.multiply(2, 5);
console.log(mult);

let div = myMath.divide(20, 10);
console.log(div);

let sqr = myMath.square(5);
console.log(sqr);

let comp = myStrFunctions.compare('hi', 'hi')
console.log(comp)