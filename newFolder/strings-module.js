const firstChar = (str) =>{
    return str[0]
}
const compare = (a,b) =>{
    if (a === b){
       return true
    }else{
        return false
    }
}
const reverse = (str) =>{
    return str.split("").reverse().join("")
}
const capital = (str) =>{
    return str.toUpperCase()
}
// console.log(capital("hola"))

module.exports = {
    firstChar,
    compare,
    reverse,
    capital
}