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
    for(let i = 0; i < splitWord.length; i++) {
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

const boldFirstUnderlineLast = (string) => {
    let splitWord = string.split(" ")
    let boldUnderline = ""
    for (let i = 0; i < splitWord.length; i++) {
        if (i === 0) {
            boldUnderline += chalk.bold(splitWord[i]) + " ";
        } else if (i === splitWord.length - 1) {
            boldUnderline += chalk.underline(splitWord[i]) + " ";
        } else {
            boldUnderline += splitWord[i] + " "
        }
    }
    console.log(boldUnderline);
}

const commandLineChalk = () => {
    let colorCommand = process.argv[2]
    let printWord = process.argv[3]
    if (colorCommand.includes("bg")) {
        let splitColor = colorCommand.split("")
        splitColor.shift()
        splitColor.shift()
        let joinColor = splitColor.join("")
        console.log(chalk.bgKeyword(joinColor.toLowerCase())(printWord))
    } else {
        console.log(chalk.keyword(colorCommand)(printWord))
    }
}

module.exports = {
    helloBlue,
    helloRed,
    stringToColor,
    evensBlueOddsYellow,
    angryText,
    backgroundCyan,
    boldFirstUnderlineLast,
    commandLineChalk,
}