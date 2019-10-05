const logFirstLetter = (str) => {
  return(str[0]);
}

const reverseString = (str) => {
  let reversed = [];
  for (let i = (str.length-1); i < str.length; i--) {
    reversed.push(str[i]);
  }
  return reversed;
}

module.exports = {
  logFirstLetter,
  reverseString
}
