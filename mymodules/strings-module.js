const firstChar = (string) => {
    console.log(string[0]);
}

const compare = (stringA, stringB) => {
    if (stringA === stringB) {
        return true
    } else {
        return false
    }
}

const reverse = (string) => {
    let splitString = string.split("")
    let reverseStringArr = []
    for (let i = splitString.length; i > -1; i--) {
        reverseStringArr.push(splitString[i])
    }
    return reverseStringArr.join("")
}

const threeLettersBack = (string) => {
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const caesar = ["d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c"];
    let encodedWord = [];
    let userInput = string;
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === " ") {
            encodedWord.push(" ")
        } else {
            for (let j = 0; j < alpha.length; j++) {
                if (userInput[i] === alpha[j]) {
                    encodedWord.push(caesar[j]);
                }
            }
        }
    }
    return encodedWord.join("");
}

module.exports = {
    firstChar,
    compare,
    reverse,
    threeLettersBack,
}

let myMath = require("./math-module");
let twoPlusTwo = myMath.sum(2, 2);
console.log(twoPlusTwo)