function sum(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function square(num) {
    return Math.pow(num, 2)
}

module.exports = {
    sum,
    multiply,
    divide,
    square
}