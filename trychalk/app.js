const chalk = require("chalk");
//1
const helloBlue = () =>{
    console.log(chalk.blue("Hello World"))
}
helloBlue();

//2
const helloRed = () =>{
    console.log(chalk.red("Hello World"))
}
helloRed();

//3
const stringToColor = (string, color) =>{
     console.log(chalk.keyword(color)(string))
}
stringToColor("this is a test", "red")

//4
const evensBlueOddsYellow = (string) =>{
    let newString= string.split(" ")
    for(let i = 0; i < newString.length; i++) {
        if(i % 2 === 1) {
            console.log(chalk.blue(newString[i]))
        } else {
            console.log(chalk.yellow(newString[i]))
        }
    }
}
evensBlueOddsYellow("this is a test")

//5
const angryText = (string) =>{
    let capitalString = string.toUpperCase()
    console.log(chalk.bold.underline.red(capitalString))
}
angryText("Where is my money!")

//6
const backgroundCyan = (string) =>{
    console.log(chalk.bgCyan.white(string))
}
backgroundCyan("Test")

//7
const boldFirstUnderlineLast = (string) =>{
    let newString = string.split(" ")
    let extraNewString = ""
    for(let i = 0; i < newString.length; i ++){
        if(i === 0){
            extraNewString += chalk.bold(newString[0]) + " "
        } else if(i > 0 && i < newString.length-1){
            extraNewString += newString[i] + " "
        } else {
            extraNewString += chalk.underline(newString[newString.length-1])
        }
    }
    return extraNewString
}
console.log(boldFirstUnderlineLast("This is a test"))

//8
// console.log(process.argv)
const commandLineChalk = (arg) =>{
    let arr = arg.slice(2)
    console.log(chalk[arr[2]].keyword(arr[1])(arr[0]))
}
commandLineChalk(process.argv)