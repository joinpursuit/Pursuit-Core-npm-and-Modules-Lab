const firstChar = (string) =>{
    for(let i = 0; i<string.length; i++ ){
        return string[0]
    }
}
const compare = (string1, string2) =>{
    if (string1 === string2){
        return true;
    }else{
        return false
    }
}
const reverse = (string) =>{
    let reverseString = ""
    for(let i = string.length-1; i >= 0; i--){
        reverseString += string[i]
    }
    return reverseString
}



module.exports = {
    firstChar,
    compare,
    reverse,
}
