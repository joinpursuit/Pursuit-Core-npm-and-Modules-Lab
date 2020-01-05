const firstChar = (str) => {
    return str[0]
}
const compare = (str1,str2) => {
    if(str1 === str2){
        return true
    } else {
        return false
    }
}

const reverse = (str) => {
    let reversedStr = ""
    for(let i = str.length -1; i >= 0;i--){
        reversedStr += str[i]
    }
    return reversedStr
}

// const palindrome = (str) => {
//     let i = 0 
//     let j = str.length -1
//     while (i < j )
// }