const chalk = require('chalk');

function helloBlue () {
    console.log(chalk.blue('Hello world!'));
}

function helloRed () {
    console.log(chalk.red('Hello world!'));
}

function stringToColor (string, color) {
    console.log(chalk[color](string));

}

function evenBlueOddsYellow (string) {
    let arraySentence = string.split(" ");
    let result = '';
    for(let i = 0; i < arraySentence.length; i++) {
        if(i % 2 === 0) {
            result += chalk.blue(arraySentence[i] + " ")
            // console.log(chalk.blue(arraySentence[i]));
        } else {
            result += chalk.yellow(arraySentence[i] + " ")
            // console.log(chalk.yellow(arraySentence[i]));
        }
    }
    console.log(result);
}

function angryText (string) {
    console.log(chalk.bold.underline.red(string))
}

function backgroundCyan (string) {
    console.log(chalk.bgCyan.white(string));
}

function boldFirstUnderlineLast (string) {
    let arraySentence = string.split(" ");
    let result = '';

    for(let i = 0; i < arraySentence.length; i++) {
        if(i === 0) {
            result += chalk.bold(arraySentence[i] + " ");
        } else if(i === (arraySentence.length - 1)) {
            result += chalk.underline(arraySentence[i]);
        } else {
            result += arraySentence[i] + " ";
        }
    }
    console.log(result);
}

function commandLineChalk () {
    
}

helloBlue();
helloRed();
stringToColor('This is a test', 'red');
evenBlueOddsYellow('This is a test');
angryText('FIVE HUNDRED DOLLARS!?!?!?');
backgroundCyan('Chipotle is the new coder food');
boldFirstUnderlineLast('This is a line of words that is awesome!');
commandLineChalk();