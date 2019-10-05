const chalk = require("chalk");

console.log('NUMBER ONE: ')
const helloBlue = () => {
    console.log(chalk.blue("hello world"))
}
helloBlue()
console.log('----------------------------------------')

console.log('NUMBER TWO: ')
const helloRed = () => {
    console.log(chalk.red("hello world"))
}
helloRed() 
console.log('----------------------------------------')

console.log('NUMBER THREE: ')
const stringToColor = (color, str) => {
    console.log(chalk.keyword(color)(str))
}
stringToColor("green", "I like green")
console.log('----------------------------------------')

console.log('NUMBER FOUR: ')
const evenBlueOddsYellow = (str) => {
   let arr = str.split(" ")
   let colorStr = ""
   for(let i = 0; i < arr.length; i++){
       if(i % 2 === 1) {
           colorStr += `${chalk.blue(arr[i])} `
       }
       else {
        colorStr+= `${chalk.yellow(arr[i])} `
       }
   } return console.log(colorStr)
}
evenBlueOddsYellow("This is a test")
console.log('----------------------------------------')

console.log('NUMBER FIVE: ')
const angryText = (str) => {
    let angryStr = chalk.red.bold.underline(str)
    console.log(angryStr)
}
angryText("I\'m hungry!")
console.log('----------------------------------------')

console.log('NUMBER SIX: ')
const backgroundCyan = (str) => {
    let coloredStr = chalk.white.bgCyan(str)
    console.log(coloredStr)
}
backgroundCyan("Let's go for a run")
console.log('----------------------------------------')

console.log('NUMBER SEVEN: ')
const boldFirstUnderlineLast = (str) => {
    let arr = str.split(" ");
    let newStr = "";
    newStr += `${chalk.bold(arr[0])} `
    for(let i = 1; i < arr.length - 1; i++) {
        newStr += `${arr[i]} `
    }
    newStr += `${chalk.underline(arr[arr.length - 1])}`
    console.log(newStr)
}
boldFirstUnderlineLast("Beauty is in the eye of the beholder")
console.log('----------------------------------------')

console.log('NUMBER EIGHT: ')
const commandLineChalk = () => {
    let myArgs = process.argv.slice(2);
    let string = myArgs[0]
    let color = myArgs[1]
    let coloredStr = chalk.keyword(color)(string)
    if(myArgs[2] === "bold") {
        console.log(chalk.bold(coloredStr))
    } else if (myArgs[2] === "underline") {
        console.log(chalk.underline(coloredStr))
    } else {
        console.log(coloredStr)
    }
}
commandLineChalk()
console.log('----------------------------------------')
