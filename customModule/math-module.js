const sum = (num1, num2) => {
    return num1 + num2 
}
// console.log(sum(4, 5));

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1/num2;
}

const square = (num) => {
    return num * num;
}

module.exports.sum = sum;
module.exports.multiply = multiply;
module.exports.square = square;
module.exports.divide = divide;




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


