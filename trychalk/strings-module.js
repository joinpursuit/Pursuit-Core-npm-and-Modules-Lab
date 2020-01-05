// - Create a new file called `strings-module.js` that contains at least the string functions 
//   - `firstChar` - returns the first character.
//   - `compare` - compares string A to string B if they are equal return true.
//   - `reverse` - reverse the string passed as an argument
//   - Come up with one of your own functions.
// - Import the `string-module` into the `main.js` file and try calling and logging the functions from `string-module`.

const firstChar = (string) => string[0]

const compare = (stringA, stringB) => {
    if (stringA === stringB){
    return true
    } else {
        return false
    }
}

const reverseString = (string) => {
    let rev = string.split("").reverse().join("")
    return rev
}

// const reverseString = (string) => {
//     let array = string.split("")
//     let array2 = []
//     for (let i=0; i<string.length;i++){
//     array2.push(array.pop())
//     }
//     return array2.join("")
// }

const countCharOccur = (string) => {
    let count = {}
    for (let i=0; i<string.length; i++){
        count[string[i]] = count[string[i]] + 1 || 1
    }
    return count
}

console.log(countCharOccur("hello"))

module.exports = {
    firstChar,
    compare,
    reverseString,
    countCharOccur
}