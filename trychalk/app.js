const chalk = require('chalk');

console.log('----- QUESTION 1 -----');

const helloBlue = () => {
    console.log(chalk.blue('Hello world'))
}
helloBlue();

console.log('----- QUESTION 2 -----');

const helloRed = () => {
    console.log(chalk.red('Hello world'));
}
helloRed();

console.log('----- QUESTION 3 -----');

const stringToColor = (string, color) => {
    let colors = `${color}`;
    let colored = chalk[colors](string)
    console.log(colored);
}
stringToColor('this is a test', 'green');

console.log('----- QUESTION 4 -----');

const evensBlueOddsYellow = (string) => {
    let stringSplit = string.split(' ');
    let stringJoin = [];

    for (let i = 0; i < stringSplit.length; i++) {
        if (i % 2 === 0) {
            let blue = chalk.blue(stringSplit[i]);
            stringJoin.push(blue)
        } else {
            let yellow = chalk.yellow(stringSplit[i]);
            stringJoin.push(yellow);
        }
    }
    console.log(stringJoin.join(' '));
}
evensBlueOddsYellow('This is a test')

console.log('----- QUESTION 5 -----');
const angryText = (string) => {
    let capString = string.toUpperCase();
    console.log(chalk.red.underline.bold(capString))
}
angryText('Question 4 was too hard!');

console.log('----- QUESTION 6 -----');

const backgroundCyan = (string) => {
    console.log(chalk.white.bgCyan(string))
}
backgroundCyan('What is the background color?');

console.log('----- QUESTION 7 -----');

const boldFirstUnderlineLast = (string) => {
    let array = string.split(' ');
    let first  = chalk.bold(array[0]);
    let last  = chalk.underline(array[array.length - 1]);
    array[0] = first;
    array[array.length-1] = last;
    console.log(array.join(' '))
}
boldFirstUnderlineLast('mic check 1212')

console.log('----- QUESTION 8 -----');

const commandLineChalk = () => {
    const args = process.argv.slice(2)
    console.log(chalk.magentaBright(args.join(' ')))
}
commandLineChalk();