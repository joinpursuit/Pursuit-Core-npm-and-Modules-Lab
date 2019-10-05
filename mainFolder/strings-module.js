const firstChar = (str) => {
    let firstLetter = str.charAt(0)
    console.log(firstLetter)
}

const compare = (curr, elem) => {
    
    if(curr === elem){
        console.log(true)
    }else{
        console.log(false)
    }
}

const reverse = (str) => {
let reverse = " "
for(let i = str.length-1; i >=0; i-- ){
    reverse += str[i]
}
console.log(reverse)
}


module.exports = {
    firstChar: firstChar,
    compare: compare,
    reverse:reverse

}