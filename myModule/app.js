console.log("=====part1======")

const chalk = require("chalk");

console.log("==========#1========")
const helloBlue = (str) => {
    console.log(chalk.blue(str))
}
helloBlue("Hello world")

console.log("=========#2========")

const helloRed = (str) => {
    console.log(chalk.red(str))
}
helloRed("Hello world")

console.log("========#3==========")

const stringToColor = (str) => {
    console.log(chalk.green(str))
}
stringToColor("johanne", 'green')

console.log("===========#4===========")

const evensBlueOddsYellow = (str) => {
    const word = str.split(" ");
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            result += `${chalk.blue(word[i])} `
        } else if (i % 2 !== 0) {
            result += `${chalk.yellow(word[i])} `
        }
    }
    console.log(result)
}
evensBlueOddsYellow("this is a string")

console.log("===========#5===========")

const angryText = (str) => {
    const text = str.toUpperCase()
    console.log(chalk.bold.red.underline(text))
}
angryText('angry!!!')

console.log("===========#6===========")

const backgroundCyan = (str) => {
    console.log(chalk.white.bgCyan(str))
}
backgroundCyan("hello")

console.log("==========#7============")

const boldFirstUnderlineLast = (str) => {
        let wordStr = str.split(" ");
        let outcome = "";
        for (let i = 0; i < wordStr.length; i++) {

            if (i === 0) {
                outcome += `${chalk.bold(wordStr[0])} `
            } else if (i === 1) {
                outcome += `${chalk.underline(wordStr[1])} `
            }
         }
    console.log(outcome)
}    
boldFirstUnderlineLast("the word")

console.log("===========#8==========")

const commandLineChalk = (str) => {
console.log(chalk.red.bold.italic(str))
}
commandLineChalk(process.argv[2])



