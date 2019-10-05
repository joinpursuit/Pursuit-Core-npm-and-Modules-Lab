function firstChar(string) {
  return string[0]
}

function compare(string, str) {
  return string === str
}

function reverse(string) {
  let newStr = ""
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i]
  }
  return newStr
}

module.exports = {
  firstChar, compare, reverse
}