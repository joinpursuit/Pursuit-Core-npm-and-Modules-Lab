let mathModule = require('./math-module.js');

let sum = mathModule.sum(3, 6);
console.log(sum);

let product = mathModule.multiply(3, 6);
console.log(product);

let quotient = mathModule.divide(6,3);
console.log(quotient);

let squared = mathModule.square(6);
console.log(squared);

let stringModule = require('./strings-module.js');

let compareStrings = stringModule.compare('Does this match string 2?','Does this match string 1?');
console.log(compareStrings);

let firstChar = stringModule.firstChar('What is the first character?');
console.log(firstChar);
let reversed = stringModule.reverse('How well does this work?');
console.log(reversed)