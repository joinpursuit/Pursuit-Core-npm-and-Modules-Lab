// Joseph P. Pasaoa
//



/* Modules Init */
const math = require('./math-module.js');
const string = require('./strings-module.js');

/* Helpers */
const log = console.log;



let wantedSum = math.sum(56.1, 43.9);
log('sum of 56.1 & 43.9: ', wantedSum);

let wantedProduct = math.multiply(5, 25);
log('multiply 5 x 25: ', wantedProduct);

let wantedQuotient = math.divide(1200, 6);
log('quotient of 1200 / 6: ', wantedQuotient);

let wantedSquare = math.square(15);
log('square of 15: ', wantedSquare);



let wantedLength = string.length('This is how we do it!');
log('length of `This is how we do it!`', wantedLength);

let wantedThird = string.third('ABcDEfG');
log('third character: ', wantedThird);

let wantedFlip = string.flip('Mirror, mirror!');
log('reverse `Mirror, mirror!`: ', wantedFlip);