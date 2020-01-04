const chalk = require('chalk');


const helloBlue = () => {
    console.log(chalk.blue('Hello world'));
}
helloBlue();


const helloRed = () => {
    console.log(chalk.red('Hello world'));
}
helloRed();


const stringToColor = (string, color) => {
    console.log(chalk.keyword(color)(string));
}
stringToColor('this is a test', 'red');


const evensBlueOddsYellow = (string) => {
    let words = string.split(" ");
    for(let i = 0; i < words.length; i++){
        i % 2 === 0 ? words[i] = chalk.yellow(words[i]) : words[i] = chalk.blue(words[i]);
    }
    console.log(words.join(" "));
}
evensBlueOddsYellow("this is a test");


const angryText = (string) => {
    console.log(chalk.red.underline.bold(string.toUpperCase()));
}
angryText('this is angry text');


const backgroundCyan = (string) => {
    console.log(chalk.white.bgCyan(string));
}
backgroundCyan("my background is cyan and font is white");


const boldFirstUnderlineLast = (string) => {
    let words = string.split(" ");
    words[0] = chalk.bold(words[0]);
    words[words.length - 1] = chalk.underline(words[words.length - 1]);
    console.log(words.join(" "));
}
boldFirstUnderlineLast("First and last");


const commandLineChalk = (color, bgColor) => {
    let newArr = [];
    for(let i = 2; i < process.argv.length; i++){
        let backgroundColor = `bg${bgColor}` 
        newArr.push(chalk[color][backgroundColor](process.argv[i]));
    }
    console.log(newArr.join(", "));
}
commandLineChalk("red","White");


