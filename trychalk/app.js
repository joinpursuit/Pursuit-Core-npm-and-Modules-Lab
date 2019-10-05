// Joseph P. Pasaoa
//



/* Modules Inits */
const chalk = require('chalk');

/* Helpers */
const log = console.log;



// Write a function called helloBlue that will log the string 'Hello world' in blue.
const helloBlue = () => {
  log(chalk.blue('Hello world'));
}
helloBlue();

// Write a function called helloRed that will log the string 'Hello world' in red.
const helloRed = () => {
  log(chalk.red('Hello world'));
}
helloRed();

// Write a function called stringToColor. It should take two arguments: a string and a color. The function should log the string 
// to the console in the given color. For example, stringToColor('this is a test', 'red') will log this is a test in red.
const stringToColor = (str, colorStr) => {
  log(chalk[colorStr](str));
}
stringToColor('This is a yellow test!', 'yellow');

// Write a function called evensBlueOddsYellow that takes a string as an argument. It should log all words at an even position/order
// in blue and all words in an odd position in yellow. For example, evensBlueOddsYellow('this is a test') will log 'this' in yellow, 
// 'is' in blue, 'a' in yellow, and 'test' in blue.
const evensBlueOddsYellow = (str) => {
  let output = '';
  let workArr = str.split(' ');
  for (let i = 0; i < workArr.length; i++) {
    i % 2 === 0
      ? output += `${chalk.yellow(workArr[i])} `
      : output += `${chalk.blue(workArr[i])} `;
  }
  log(output);
}
evensBlueOddsYellow('This is an alternating yellow-blue test.');

// Write a function called angryText that takes a string as an argument. It should log that string in red, underlined, and 
// bold capital letters.
function angryText(str) {
  log(chalk.red.bold.underline(str.toUpperCase()));
}
angryText('This is an angry test!');

// Write a function called backgroundCyan that takes a string as an argument, and logs that string in white font color and 
// cyan background-color (check the chalk documentation to see how to change background colors).
function backgroundCyan(str) {
  log(chalk.white.bgCyan(str));
}
backgroundCyan('This is a white on cyan test');

// Write a function called boldFirstUnderlineLast that takes a string as an argument and logs the string, with 
// the first word in bold and the last word underlined.
function boldFirstUnderlineLast(str) {
  let workArr = str.split(' ');
  workArr[0] = `${chalk.bold(workArr[0])}`;
  workArr[workArr.length - 1] = `${chalk.underline(workArr[workArr.length - 1])}`;
  log(workArr.join(' '));
}
boldFirstUnderlineLast('This is bold first underline last test');

// Write a function called commandLineChalk that takes the arguments entered in the command line. The function should 
// log out whatever was entered into the terminal, in a color of your choice. Try adding more command line argument 
// options so you can specify the color, background color, etc. Hint: Take a look at process.argv.
function commandLineChalk() {
  let inputArr = process.argv;
  if (inputArr.length < 6) {
    log(chalk.redBright('Failure: ') + chalk.gray('This commandLineChalk function needs three initial command line arguments to '));
    log(chalk.gray('    style (for e.g.: color, bgColor, style) and at least a fourth as an output string.\n    Try again! :D'));
    return;
  } else {
    let str = inputArr.slice(5).join(' ');
    let output = `${chalk[inputArr[2]][inputArr[3]][inputArr[4]](str)}`;
    log(output);
  }
}
commandLineChalk();