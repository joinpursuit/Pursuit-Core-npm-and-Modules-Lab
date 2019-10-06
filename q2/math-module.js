// Joseph P. Pasaoa
// Math Functions Module
//



const sumOfTwo = (num1, num2) => { // different name sumOfTwo for different exported name practice
  return num1 + num2;
}

const productOfTwo = (num1, num2) => {
  return num1 * num2;
}

const quotientOfTwo = (dividendNum, divisorNum) => {
  return dividendNum / divisorNum;
}

const squareThis = (num) => {
  return num ** 2;
}



module.exports = {
  sum: sumOfTwo,
  multiply: productOfTwo,
  divide: quotientOfTwo,
  square: squareThis,
};
