const math = require('./math-module.js');
const words = require('./strings-module.js');

let total = math.sum(15, 5)

let product = math.multiply(15, 5)

let dividend = math.divide(15, 5)

let power = math.square(15, 5)

let firstCharacter = words.firstChar('Fresh');

let compareWords = words.compare('beans', 'beans');

let reserveThis = words.reverse("Pals")

let randomJunk = words.addRandomStuff("Pizza")


console.log(total);
console.log(product);
console.log(dividend);
console.log(power);
console.log(firstCharacter);
console.log(compareWords);
console.log(reserveThis);
console.log(randomJunk);




// console.log(myMath)

// let result = myMath.sum(2, 3)
// console.log('Sum: ' + result)

// let powerResult = myMath.power(2, 6)
// console.log('Power: ' + powerResult)

// let thisNumber = myMath.myMagicNumber
// console.log(thisNumber)