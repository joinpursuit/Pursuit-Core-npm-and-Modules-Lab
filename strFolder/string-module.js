function firstChar(str) {
    return str[0];
}

function compare(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

function reverse(str) {
    let reverseArr = [];
    
    for(let letter of str) {
        reverseArr.unshift(letter);
    }

    let reverseWord = reverseArr.join("");

    return reverseWord;
}

function neverTypeLikeThis(str) {
    let neverArr = [];

    for (let letter of str) {
        if (str.indexOf(letter) % 2 === 0) {
            neverArr.push(letter.toUpperCase());
        } else {
            neverArr.push(letter.toLowerCase());
        }
    }

    let badTyping = neverArr.join("");

    return badTyping;
}

module.exports = {
    firstChar,
    compare,
    reverse,
    neverTypeLikeThis
}