const math = require('./math-module.js');
const strings = require('./strings-module.js');

let add = math.sum(4,5);
let mult = math.multiply(2,5);
let div = math.divide(20, 10);
let square = math.square(5);

console.log(add);
console.log(mult);
console.log(div);
console.log(square);

let firstChar = strings.firstChar("hello")
let compare = strings.compare("hello", "hello");
let reverse = strings.reverse("helloWorld");

console.log(firstChar);
console.log(compare);
console.log(reverse);
