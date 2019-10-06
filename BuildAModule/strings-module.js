const firstChar = (string) => {
    return string[0]
}
const compare = (string1, string2) => {
    if (string1 === string2) {
        return true;
    } else{
        return false;
    }   `       `
}
const reverse = (string) => {
return string.split('').reverse().join('')
}

module.exports = {
    firstChar,
    compare,
    reverse
}