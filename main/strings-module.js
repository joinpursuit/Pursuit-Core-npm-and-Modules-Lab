const firstChar = (str) => {
    return str[0]
}
// console.log(firstChar("hello"))

const compare = (a, b) => {
    return a === b
}
// console.log(compare("a", "a"))

const reverse = (str) => {
    let results = str.split("")
    return results.reverse().join("")
    // return results.join(" ")
}
// console.log(reverse("hello"))

const middleChars = (str) => {
    if(str.length % 2 === 0){return [str[str.length / 2 - 1], str[str.length /2]]}
    return str[Math.floor(str.length / 2)]
    
}
// console.log(middleChars("yea"))

module.exports = {
    firstChar,
    compare,
    reverse,
    middleChars
}