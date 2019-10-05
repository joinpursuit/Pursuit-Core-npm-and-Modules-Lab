const chalk = require('chalk');
const log = console.log;

const helloBlue = () => log(chalk.blue('Hello World'));
const helloRed = () => log(chalk.red('Hello World'));
const stringToColor = (str, col) => log(chalk[col](str));
const evensBlueOddsYellow = (str) => str.split(' ').forEach((ele, i) => i % 2 === 0 ? log(chalk.yellow(ele)) : log(chalk.blue(ele)));
const angryText = (str) => log(chalk.red.underline.bold(str.toUpperCase()));
const backgroundCyan = (str) => log(chalk.white.bgCyan(str));

const boldFirstUnderlineLast = (str) => {
    const arr = str.split(' ')
    return arr.forEach((ele, i) => i === 0 ? log(chalk.bold(ele)) : i === arr.length - 1 ? log(chalk.underline(ele)) : log(ele))
}

const commandLineChalk = () => {
    const arr = process.argv;
    const str = arr[2];
    let args = arr.slice(3);

    args = args.map(ele => `['${ele}']`);
    log('args ', args, 'chalk'+args.join(''))
    let qwerqwer = 'chalk' + args.join('') + str;
    console.log(qwerqwer);
    

    // for (let i = 3; i < arr.length; i++) {
        // args += arr[i];
    // }
    console.log(arr)

    // console.log(chalk[args](str));
}

// console.log(chalk['red']['bold']['underline']('Hello'));
// console.log(chalk['sdf-'] + ['sdfasdf']('hello'));

// helloBlue();
// helloRed();
// stringToColor('this is a test', 'blue');
// evensBlueOddsYellow('this is a test');
// angryText('Goodbye World');
// backgroundCyan('Cyanora');
// boldFirstUnderlineLast('Hello to the world!');
// commandLineChalk();




