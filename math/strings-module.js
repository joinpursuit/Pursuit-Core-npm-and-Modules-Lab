const firstChar = (str) => {
    return str[0]
}

const compare = (x, y) => {
    if (x === y){
        return true
    } else {
        return false
    }
}

const reverse = (str) => {
    let newArray = str.split('')
    let reverseStr = newArray.reverse()
    return reverseStr.join('')
}

printStringXTimes = (str, num) => {
    let newArray = ''
    for (i = 0; i < num; i++){
        newArray += ' ' + str
    }
   return newArray
}


module.exports.firstChar = firstChar
module.exports.compare = compare
module.exports.reverse = reverse
module.exports.printStringXTimes = printStringXTimes