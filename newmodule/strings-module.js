

const firstChar = (str) => {
  return str.charAt(0)
}

const compare = (str1, str2) => {
  if (str1 === str2){
      return true 
  } else {
      return false
  }
}


const reverse = (str) => {
  let arr = str.split("")
     arr.reverse()
  let newStr = arr.join("")
  return newStr
}


module.exports = {
    firstChar,
    compare, 
    reverse
}




