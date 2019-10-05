const chalk = require("chalk")

const helloBlue = () => {
    console.log(chalk.blue("Hello world"))
}

const helloRed = () => {
    console.log(chalk.red("Hello world"))
}

const stringToColor = (string, color) => {
    console.log(chalk.keyword(color)(string))
}



module.exports = {
    helloBlue,
    helloRed,
    stringToColor,
}