const math = require("./math-module.js");
const strings = require("./strings-module.js");


const {firstChar} = strings;
const {compare} = strings;
const {reverse} = strings;
const {capital} = strings;
console.log(firstChar("hola"))
console.log(compare("hola","hola"))
console.log(reverse("hola"))
console.log(capital("hola"))

const {sum} = math;
const {multiply} = math;
const {divide} = math;
const {square} = math;
console.log(sum(5,8));
console.log(multiply(5,8));
console.log(divide(5,8));
console.log(square(8));
