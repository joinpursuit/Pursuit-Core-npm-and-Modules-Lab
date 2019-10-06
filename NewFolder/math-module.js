function sum(arg1, arg2){
    return arg1 + arg2
};

function multiply(arg1, arg2){
    return arg1 * arg2;
}

function divide(arg1,arg2){
    return arg1/arg2;
}

function square(arg1){
    return Math.pow(arg1,2)
}

module.exports = {
    sum,
    multiply,
    divide,
    square
}