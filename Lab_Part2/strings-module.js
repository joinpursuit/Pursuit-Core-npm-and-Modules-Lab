const firstChar = (str) => str[0];

const compare = (str1, str2) => str1 === str2;

const reverse = (str) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

module.exports = {
    firstChar,
    compare,
    reverse
}