const upperFirstLetter = (string) => {
    let strArray = string.split("")
    strArray[0] = strArray[0].toUpperCase()
    return strArray.join("")
}

const reverseString = (string) => {
    let strArray = string.split("");
    let reversedArray = []
    for(let i = strArray.length - 1; i >= 0; i--) {
        reversedArray.push(strArray[i]);
    }
    return reversedArray.join("")
}

const upperLastLetter = (string) => {
    let strArray = string.split("")
    strArray[strArray.length - 1] = strArray[strArray.length - 1].toUpperCase()
    return strArray.join("")
}

module.exports = {
    upperFirstLetter,
    upperLastLetter,
    reverseString
}