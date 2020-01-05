const firstChar = (str) => {
 return str[0]
}

const compare = (strA,strB) => {
  if(strA === strB){
    return true
  } else {
    return false
  }
}

const reverse = (str) => {
  let newStr = "";
  for (let i =str.length-1 ; i >= 0 ; i--){
    newStr +=str[i]
  }
  return newStr
}

module.exports = {
  firstChar,
  compare,
  reverse,
}

