const firstChar = (str) => str[0]


const compare = (strA, strB) => strA === strB ? true : false;

const reverse = (str) => {
    return newStr = str.split('').reverse('').join('')
    // let str2 = ''
    // for (let i = str.length - 1; i >= 0; i--) {
    //     str2 += str[i];
    // }
    // return str2;
}

module.exports = {
    firstChar,
    compare,
    reverse
}