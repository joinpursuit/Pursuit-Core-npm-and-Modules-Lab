const firstChar = (string) => {
    return string[0]
}

const compare = (string) => {
    if (string[0] === string[1]) {
        return true
    } else {
        return false
    }
}

const reverse = (string) => {
    let result = ""
    for (let i = string.length-1; i > 0; i--) {
        result+=string[i]
        return result
    }
}

module.exports = {firstChar, compare, reverse}