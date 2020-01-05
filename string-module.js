const firstChar = (string) => {
    console.log(string[0])
}

const compare = (stringA, stringB) => {
    if(stringA === stringB){
        return true
    } else {
        return false
    }
}

const reverse = (string) => {
    let newStr = ""
    for(let i = string.length; i >= 0; i--){
        newStr += string[i]
    }
    return newStr
}

module.exports = {
    firstChar, 
    compare,
    reverse
}