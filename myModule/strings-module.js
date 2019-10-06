const firstChar = (str) => str[0];
const compare = (strA, strB) => strA === strB ? true : false;
const reverse = (str) => {
    let rev = '';
    for (let i = str.length - 1; i > -1; i--) {
        rev += str[i];
    }
    return rev;
}
const upperLower = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

module.exports = {
    firstChar,
    compare,
    reverse,
    upperLower
}