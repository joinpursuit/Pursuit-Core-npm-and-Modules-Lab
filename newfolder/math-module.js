const sum = (num1, num2) => {
    return num1 + num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    let quotient = num1 % num2
    return quotient
}

const square = (num1) => {
    return num1 * num1
}

module.exports = {sum, multiply, divide, square}
