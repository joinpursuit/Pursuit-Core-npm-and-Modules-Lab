const sum = (num1, num2) => {
    //console.log(num1 + num2);
    return (num1 + num2)
}


const multiply = (num1, num2) => {
    //console.log(num1 * num2);
    return (num1 * num2);
}

const divide = (num1, num2) => {
    //console.log(num1 / num2);
    return (num1 / num2);
}

const square = (base, exponent) => {
    //console.log(Math.pow(base, exponent));
    return (Math.pow(base, exponent));
}
module.exports =  {
    sum,
    multiply,
    divide,
    square
}