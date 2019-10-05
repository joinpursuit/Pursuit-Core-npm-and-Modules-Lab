function firstChar (string) {
    let charArray = string.split("");
    return charArray[0];
}

function compare (stringA, stringB) {
    if(stringA === stringB) {
        return 'true';
    } else {
        return 'false';
    }
}

function reverse (string) {
    let wordArray = string.split("");
    let reversedWord = '';

    for(let i = (wordArray.length - 1); i >= 0; i--) {
        reversedWord += wordArray[i];
    }

    return reversedWord;
}

function addRandomStuff (string) {
    let wordArray = string.split("");
    let reversedWord = '';

    for(let value of wordArray) {
        let randomNum = Math.floor((Math.random() * 365) + 1);
        reversedWord += value + randomNum;
    }
    return reversedWord;
}

module.exports = {
    firstChar,
    compare,
    reverse,
    addRandomStuff,
}