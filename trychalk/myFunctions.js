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

const evensBlueOddsYellow = (string) => {
    let splitWord = string.split(" ");
    let colorWord = "";
    for(i = 0; i < splitWord.length; i++) {
        if (i % 2 === 0) {
            colorWord += chalk.yellow(splitWord[i]) + " ";
        } else {
            colorWord += chalk.blue(splitWord[i]) + " ";
        }
    }
    console.log(colorWord);
}

const angryText = (string) => {
    console.log(chalk.red.bold.underline(string.toUpperCase()))
}

const backgroundCyan = (string) => {
    console.log(chalk.white.bgCyan(string))
}

module.exports = {
    helloBlue,
    helloRed,
    stringToColor,
    evensBlueOddsYellow,
    angryText,
    backgroundCyan,
}