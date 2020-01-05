const math = require("./math-module");

const {sum} = math;
const {multiply} = math;
const {square} = math;
const {divide} = math;

let product = multiply(2, 5);
let add = sum(20, 10);
let two = square(5);
let div = divide(20, 10)

console.log(add);
console.log(product);
console.log(two)
console.log(div)

const string = require ("./strings-module")

const {firstChar} = string;
const {compare} = string;
const {reverse} = string;

let char = firstChar("loop");
let pare = compare("loop", "loop");
let verse = reverse("loop");

console.log(char);
console.log(pare);
console.log(verse);
