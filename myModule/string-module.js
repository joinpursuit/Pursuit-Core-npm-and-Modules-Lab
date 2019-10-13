const firstChar = (str) => {
    return str[0]
}

const compare = (str1, str2) => {
    if (str1 === str2) {
        return true
    } 
}

const reverse = (str) => {
        let emptyStr = "";
    for (let i = str.length; i > 0; i--) {
         emptyStr += str[i];
        
    }
   return emptyStr
}


module.exports = {
    firstChar: firstChar,
    compare: compare, 
    reverse: reverse
    
}