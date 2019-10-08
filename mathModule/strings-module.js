
function firstChar(firstCharacter) {
return  firstCharacter[0]
}

function compare (string, str2){
  return string === str2
}

function reverse(strReverse){
  let newStr = "";
  for ( i = strReverse.length - 1 ; i >= 0 ; i--){
    newStr += strReverse[i];
  }
  return newStr
}

module.exports = {
  firstChar,
  compare,
  reverse
}