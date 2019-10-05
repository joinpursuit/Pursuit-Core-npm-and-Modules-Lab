const firstChar = (string) => {
  return string[0]
}

const compare = (string1, string2) => {
  if (string1 === string2) {
    return true
  }
  else {
    return false
  }
}

const reverse = (string) => {
  let array = string.split('').reverse()
  return array.join('')
}

const uppercase = (string) => {
  return string.toUpperCase()
}

module.exports = {
  firstChar: firstChar,
  compare: compare,
  reverse: reverse,
  uppercase: uppercase
}
