const chalk = require("chalk");
const process = require("process")

const helloBlue = () => {
    // Hello world in blue
    let blueWord = chalk.blue("Hello World");
    console.log(blueWord);
}

helloBlue();

const helloRed = () => {
    // Hello world in red
    let redWord = chalk.red("Hello World");
    console.log(redWord);
}

helloRed();

const stringToColor = (string, color) => {
    let stringColor = `${color}`
    let coloredString = chalk[stringColor](string)
    console.log(coloredString)
}

stringToColor("This is green text", "green");

const evensBlueOddsYellow = (string) => {
    let strArray = string.split(' ')
    let newStrArray = [];

    for (let i = 0; i < strArray.length; i++) {
        if (i % 2 === 0) {
            let blue = chalk.blue(strArray[i]);
            newStrArray.push(blue)
        } else {
            let yellow = chalk.yellow(strArray[i]);
            newStrArray.push(yellow);
        }
    }
    console.log(newStrArray.join(" "))
}

evensBlueOddsYellow('this is a test');

const angryText = (string) => {
    let capString = string.toUpperCase();
    console.log(chalk.red.underline.bold(capString))
}

angryText("I am angry!!!!");

const backgroundCyan = (string) => {
    let cyanBackgroundStr = chalk.bgCyan.white(string)
    console.log(cyanBackgroundStr)
}

backgroundCyan("This is a string with a cyan background color");

const boldFirstUnderlineLast = (string) => {
    let strArray = string.split(' ');
    let firstWord = chalk.bold(strArray[0]);
    let lastWord = chalk.underline(strArray[strArray.length - 1]);
    strArray[0] = firstWord;
    strArray[strArray.length - 1] = lastWord;
    console.log(strArray.join(" "))
}

boldFirstUnderlineLast("Hello to you my dear");

const commandLineChalk = () => {
    const args = process.argv.slice(2);
    console.log(chalk.yellow(args.join(" ")))
}

commandLineChalk()