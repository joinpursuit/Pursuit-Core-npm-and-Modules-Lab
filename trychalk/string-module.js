const firstChar = (str) => {
    return str.charAt(0);
}
console.log('----------------------------------------')

const compare = (a, b) => {
    if(a === b) {
        return true
    }
    else{
        return false
    }
}
console.log('----------------------------------------')

const reverse = (str) => {
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}
console.log(reverseMe)
console.log('----------------------------------------')
module.exports = {
    firstChar,
    compare,
    reverse
}
const mathMod = require("./math-module")
