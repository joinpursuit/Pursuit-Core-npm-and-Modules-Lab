const chalk = require("chalk")
const log = console.log 
// excercises
//1
const helloBlue = (str) => {
    log(chalk.blue(str))
}

//2
const helloRed = (str) => {
    log(chalk.red(str))
}

//3
const stringToColor = (str, color) => {
    log(chalk.keyword(color)(str))
}

stringToColor("This is a test", "red")

