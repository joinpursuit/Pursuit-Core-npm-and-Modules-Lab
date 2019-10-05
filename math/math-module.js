const sum = (numA, numB) => {
    return numA + numB
}

const multiply = (numA, numB) => {
    return numA * numB
}

const divide = (numA, numB) => {
    return numA / numB
}

const square = (num) => {
    return num * num
}


module.exports.sum = sum
module.exports.multiply = multiply
module.exports.divide = divide
module.exports.square = square


//Importing from string module works
const stringModule = require('./strings-module.js')

firstChar = stringModule.firstChar

console.log(firstChar('helloooo'))