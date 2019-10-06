function firstChar(str){
    return str[0];
}

function compare(str1, str2){
 if (str1 === str2){
     return true
 }else{
     return false
 }   
}

function reverse(str){
    return str.split('').reverse().join()
}


module.exports = {
    firstChar,
    compare,
    reverse

}