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

const reverse = str => {
  let newStr = ""
  for (let i = str.length - 1; i <= 0; i--) {
    console.log(i)
    newStr += str[i]
  }
  return newStr
}
console.log(reverse("hello"))
