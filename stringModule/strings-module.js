const firstChar = (string) => {
    let firstLetter = string[0];
    console.log(firstLetter);
    return firstLetter;
}

const compare = (stringA, stringB) => {
    console.log(stringA === stringB)
    return stringA === stringB;
}

const reverse = (string) => {
    let result = string.split("").reverse().join("");
    console.log(result);
    return result;
}

module.exports = {
    firstChar,
    compare,
    reverse
}
