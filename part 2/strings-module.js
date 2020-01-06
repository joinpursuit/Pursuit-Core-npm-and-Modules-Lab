const firstChar = str => {
  return str[0]
}

const compare = (str1, str2) => {
  let equal = true
  if (str1.length !== str2.length) {
    return (equal = false)
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return (equal = false)
      }
    }
  }
  return equal
}
// console.log(compare("aa", "aa"))

//
const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("")
}
console.log(reverse("hello"))

const returnLastChar = str => {

  return str[str.length-1]
}
console.log(returnLastChar("hello"))

module.exports = {
  firstChar,
  compare,
  reverse,
  returnLastChar
}
