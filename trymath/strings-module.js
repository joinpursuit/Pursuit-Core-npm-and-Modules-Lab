const firstChar = (string) => {
    return string[0];
}


const compare = (stringA, stringB) => {
    let bool;
    stringA === stringB ? bool = true : bool = false;
    return bool;
}


const reverse = (string) => {
    let newString = "";
    let i = string.length;
    while(i >= 0){
        newString += string.charAt(i);
        i--;
    }
    return newString;
}


module.exports = {
    firstChar: firstChar,
    compare: compare,
    reverse: reverse
}
