//function that returns the first character
const firstChar = (str) =>{
    return str[0];
}

//compares two strings
const compare = (a,b) =>{
    if(a === b){
        return true
    }
    return false
}

//reverse the string passed as arg
const reverse = (str) => {
    let splitStr = str.split('');
    let reverseArr = splitStr.reverse();
    let makeStr = reverseArr.join('');

    return makeStr
}

module.exports = {
    firstChar,
    compare,
    reverse
}