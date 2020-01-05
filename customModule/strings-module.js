const firstChar = (str) => {
    return str[0];
}

const compare = (strA, strB) => {
    return strA === strB;
}

const reverse = (str) => {
    // let resArr = [];
    // for (let i = str.length -1; i >= 0; i--) {
    //     resArr.push(str[i])
    // }
    // let res = resArr.join(" ")
    // return res;

    let res = "";
    for (let i = str.length-1; i >= 0; i--) {
        res += str[i];
    }
    return res;
    
    // return str.split("").reverse().join("");
}

module.exports.firstChar = firstChar;
module.exports.compare = compare;
module.exports.reverse = reverse;


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