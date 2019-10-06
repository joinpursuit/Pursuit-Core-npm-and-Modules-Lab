// Joseph P. Pasaoa
// String Functions Module
//



const howLong = (str) => str.length;

const thirdLetter = (str) => str[2];

const reverseIt = (str) => str.split('').reverse().join('');



module.exports = {
  length: howLong,
  third: thirdLetter,
  flip: reverseIt
}
