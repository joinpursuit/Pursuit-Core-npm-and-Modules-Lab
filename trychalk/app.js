const chalk = require("chalk")


const helloBlue = () => {
    console.log(chalk.blue('hello world'))
}
const helloRed = () => {
    console.log(chalk.red('hello world'))
}
// helloRed()

const stringToColor = (string, color) => {
    console.log(chalk.keyword(color)(string))

}
// stringToColor("This is a test","red")
        
const evensBlueOddsYellow = (string) => {
let newString =""
let color = "yellow"
for(let i = 0; i < string.length; i++){
    if(string[i] === " " && color === "yellow")  {
        color = "blue"
    }else if(string[i] === " " && color === "blue"){
        color = "yellow"
    }
    newString += chalk.keyword(color)(string[i])
}
console.log(newString)
}
evensBlueOddsYellow("this is a test")

const angryText = (string) => {
console.log(chalk.red.underline.bold(string.toUpperCase()))
}
angryText("im angry")

const backgroundCyan = (string) => {
    console.log(chalk.bgYellow(string))
}
backgroundCyan("hi world")

const boldFirstUnderlineLast = (string) => {
    // let newString =" "
    let output = string.split(" ")

    // console.log(output)
    for(let i = 0; i < output.length; i++){
        output[0] = chalk.bold(output[0])
        output[output.length - 1] = chalk.underline(output[output.length - 1])
    }
    console.log(output.join(" "))

}
boldFirstUnderlineLast("how are you doing")

const commandLineChalk = (arg,arg2,arg3) => {
    console.log(chalk[arg3].keyword(arg2)(arg)) 
}
commandLineChalk(process.argv[2],process.argv[3],process.argv[4])