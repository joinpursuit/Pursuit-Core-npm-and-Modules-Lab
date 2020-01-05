const chalk = require("chalk");
chalk.level = 3;
// // chalk.rgb(50, 0, 100)
// console.log(chalk.rgb(50, 0, 100)("Hello World"));

const helloBlue = (str) => {

    console.log(chalk.blue(str));
}

// helloBlue("Hello World!");

const helloRed = (str) => {
    console.log(chalk.red(str))
}
// helloRed("Hello World!");

const stringToColor = (str, color) => {
    
    console.log(chalk.keyword(color)(str))
}
// stringToColor("You did it!", "violet")

const evensBlueOddsYellow = (str) => {
    let split = str.split(" ");
    for (let i = 0; i < split.length; i++) {
        if (split[i] % 2 === 0) {
            split[i] = chalk.blue(split[i]);
        } else {
            split[i] = chalk.yellow(split[i]);
        }
    }
    console.log(split.join(" "));
}

// evensBlueOddsYellow('this is a test')

const angryText = (str) => {
    console.log(chalk.red.bold.underline(str.toUpperCase()))
}
// angryText("this works")

const backgroundCyan = (str) => {
    console.log(chalk.bgCyan.white(str));
}

// backgroundCyan("new background")

const blodFirstUnderlineLast = (str) => {
    let split = str.split(" ");
    split[0] = chalk.bold(split[0])
    let last = split.length-1;
    split[last] = chalk.underline(split[last]);
    console.log(split.join(" "));
}
blodFirstUnderlineLast("hey there")

console.log(process.argv)
