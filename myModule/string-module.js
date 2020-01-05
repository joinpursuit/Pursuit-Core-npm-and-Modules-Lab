const firstChar = (str) => {
    return (str[0])
}

const compareStr = (str1,str2) => {
    if(str1 === str2){
        return true
    }else{
        return false
    }
}

const reverse = (str) => {
    arr = str.split("")
    arr2 = []
    for(let i = 0; i < str.length; i++){
        arr2.push(arr.pop())
    }
    return arr2.join("")
}

const strLength = (str) => {
        return str.length
}

module.exports = {
  firstChar,
  compareStr,
  reverse,
  strLength
}
