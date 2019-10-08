const myMath = require('./math-module.js')
const strMod = require('./strings-module.js')


let a = 3;
let b = 6;
let c = 20;
let d = 10;
let base = 5;
const exponent = 2;
let result = myMath.sum(a ,b);
let resultDivision = myMath.div(c,d);
let square = myMath.square(base, exponent);
// let square = resultSquare;
console.log(result);
console.log(resultDivision);
console.log(square);

let firstCharacter= strMod.firstChar("Hello world");
let string = "Faris";
let str2 = "Faris";
let strReverse = "LOL";
let compareStr = strMod.compare(string, str2);
let reverse = strMod.reverse(strReverse);
console.log(firstCharacter);
console.log(compareStr);
console.log(reverse);




