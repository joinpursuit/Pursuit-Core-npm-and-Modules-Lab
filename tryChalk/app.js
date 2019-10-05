const chalk = require('chalk')


console.log(`\nProblem 1`);
const helloBlue = () => {
    console.log(chalk.blue('Hello world'));

}
helloBlue();

console.log(`\nProblem 2`);
const helloRed = () => {
    console.log(chalk.red('Hello world'));

}
helloRed();

console.log(`\nProblem 3`);
const stringToColor = (str, color) => {
    console.log(chalk[color](str));

}
stringToColor('This is a test', 'green');

console.log(`\nProblem 4`);
const evensBlueOddsYellow = (str) => {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            arr[i] = chalk.blue(arr[i])
        } else {
            arr[i] = chalk.yellow(arr[i])
        }
    }
    console.log(arr.join(' '));

}

evensBlueOddsYellow('this is a test');

console.log(`\nProblem 5`);
const angryText = (str) => {
    console.log(chalk.red.bold.underline(str));
}
angryText('Anger');

console.log(`\nProblem 6`);
const backGroundCyan = (str) => {
    console.log(chalk.bgCyan.white(str));
}
backGroundCyan('this is a test');

console.log(`\nProblem 7`);
const boldFirstUnderlineLast = (str) => {
    let strArr = str.split(' ')
    strArr[0] = chalk.bold(strArr[0])
    strArr[strArr.length - 1] = chalk.underline(strArr[strArr.length - 1])
    console.log(strArr.join(' '));
}
boldFirstUnderlineLast('Bold first and then underline');

console.log(`\nProblem 8`);

const commandLineChalk = () => {
    const args = process.argv.slice(2)
    console.log(chalk[args[0]](args[1]))
}
commandLineChalk()