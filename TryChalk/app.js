let chalk = require('chalk');


const helloBlue = () => {
    console.log(chalk.blue('Hello world'));
}

const helloRed = () => {
    console.log(chalk.red('Hello world'));
}

const stringToColor = (text, color) => {
    //let defaultColors = ['black','red','green','yellow','blue ','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright'];
    console.log(chalk.keyword(color)(text))
}

//stringToColor("hi there", "violet")

const evensBlueOddsYellow = (text) => {
    let coloredText = '';
    let arr = text.split(' ')
    arr.forEach(element => {
        if (element.length % 2) {
            coloredText += chalk.yellow(element) + ' '
        } else {
            coloredText += chalk.blue(element) + ' '
        }
    });
    console.log(coloredText);
}
evensBlueOddsYellow("there is a test going on");

const angryText = (text) => {
    console.log(chalk.underline.bold.red(text.toUpperCase()));
}
angryText("there is a test going on");

const backgroundCyan = (text) => {
    console.log(chalk.white.bgCyan(text));
}
backgroundCyan("still a test");

const boldFirstUnderlineLast = (text) => {
    let arr = text.split(" ");

    let modText = chalk.bold(arr[0]) + ' '
    for (let i = 1; i < arr.length - 1; i++) {
        modText += arr[i] + ' '
    }
    modText += chalk.underline(arr[arr.length - 1]);
    console.log(modText)
}
boldFirstUnderlineLast('let see how this will work');


const commandLineChalk = () => {
    console.log('please launce node with the fellowing command line :\ node app.js "your-text" "text-Color" "background-color"')
    let text = '';

    for (let i = 2; i < process.argv.length - 2; i++) {
        text += process.argv[i] + ' ';
    }
    let bgColor = process.argv[process.argv.length - 1]
    let parsedBgColor = 'bg' + bgColor[0].toUpperCase();
    for (let i = 1; i < bgColor.length; i++) {
        parsedBgColor += bgColor[i];
    }
    let textColor = process.argv[process.argv.length - 2]
    // console.log(textColor, parsedBgColor)
    console.log(chalk.keyword(textColor)[parsedBgColor](text))   
}
commandLineChalk()