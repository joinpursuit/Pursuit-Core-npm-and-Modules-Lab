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
    // console.log(stringSplit)

    for (let i = 0; i< stringSplit.length; i++){
        if(i%2 === 0) {
          stringJoin[i] = chalk.blue('i')
        } else{
        stringJoin[i] = chalk.yellow(stringSplit[i])
    }
}
//   stringSplit.join('');
    // console.log(stringSplit);
    // console.log(stringJoin);
}
console.log('revisit this question')
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
backgroundCyan('What is the background color?')

console.log('----- QUESTION 7 -----');

const boldFirstUnderlineLast = (string) => {
    let array = string.split(' ')
    let array[0] = chalk.bold(str);
    let array[array.length-1] = chalk.underline();
   
    console.log(array.join(' '))
}
boldFirstUnderlineLast('mic check 1212')
console.log('revisit this question')

console.log('----- QUESTION 8 -----');