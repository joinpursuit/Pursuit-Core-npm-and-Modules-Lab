const mathModule = require("./math-module.js")

const stringModule = require("./string-module.js")

    let num1 = 7;
    let num2 = 3;

let sum = mathModule.sum(num1, num2);
console.log(sum)

let product = mathModule.product(num1, num2);
console.log(product)

let quotient = mathModule.quotient(num1, num2);
console.log(quotient)

let square = mathModule.square(num1);
console.log(square)


let str = stringModule.firstChar('Hello');
console.log(str)

let str1 = 'hello';
let str2 = 'hello';

let compare = stringModule.compare(str1, str2);
console.log(compare)

let reverse = stringModule.reverse(str);
console.log(reverse)