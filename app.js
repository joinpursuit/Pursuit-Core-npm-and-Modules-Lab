// const chalk = require('chalk');==> In my app.js file I require the chalk module. 
const chalk = require("chalk");
// ========================================================================================== 
// 1. Write a function called helloBlue that will console.log the string 'Hello world' in blue;
console.log(chalk.red.bgWhite("============================Question 1================================"))

function helloBlue() {
   console.log (chalk.blue("Hello world"));
 }
 helloBlue();

// ==========================================================================================
console.log(chalk.red.bgWhite("============================Question 2================================"))

// 2. Write a function called helloRed that will console.log the string 'Hello world' in red.

function helloRed() {
   console.log(chalk.red("Hello world"));
}
helloRed();

// ==========================================================================================
console.log(chalk.red.bgWhite("============================Question 3================================"))

// 3.Write a function called stringToColor. It should take two arguments: a string and a color.
// The function should log the string to the console in the given color. 
// For example, stringToColor('this is a test', 'red') will log "this is a test in red.

function stringToColor() {
  console.log(chalk.red('this is a test') + " " + "in red");
}
stringToColor();

// ==========================================================================================
console.log(chalk.red.bgWhite("============================Question 4================================"))

// 4. Write a function called evensBlueOddsYellow that takes a string as an argument. 
// It should log all even words in blue and all odd words in yellow. For example, 
// evensBlueOddsYellow('this is a test') will log 'this' in yellow, 'is' in blue, 
// 'a' in yellow, and 'test' in blue.

function evensBlueOddsYellow(str) {
  let wordArr = str.split(' ');
  let outputStr = '';
  for (let i = 0; i < wordArr.length; i++) {
    if (i % 2 === 0) {
      outputStr += `${chalk.blue(wordArr[i])} `;
    } else {
      outputStr += `${chalk.yellow(wordArr[i])} `;
    }
  }
  console.log(outputStr);
}
let sample = 'this is a test';
evensBlueOddsYellow(sample);

// =================================================================================
console.log(chalk.red.bgWhite("============================Question 5================================"))

// 5. Write a function called angryText that takes a string as an argument. 
// It should log that string in red, underlined, and bold capital letters.

function angryText(str5) {
  let capitalLetters = str5.toUpperCase();
  console.log(chalk.red.bold.underline(capitalLetters));
}
let str5 = 'this is an angry text';
angryText(str5);

// ==================================================================================
console.log(chalk.red.bgWhite("============================Question 6================================"))

// 6. Write a function called backgroundCyan that takes a string as an argument, 
// and logs that string in white font color and cyan background-color 
// (check the chalk documentation to see how to change background colors).

function backgroundCyan(str6) {
  console.log(chalk.white.bgCyan(str6));
}
let str6 = 'This is white font color with cyan background';
backgroundCyan(str6);

// ==================================================================================
console.log(chalk.red.bgWhite("============================Question 7================================"))

// 7. Write a function called boldFirstUnderlineLast that takes a string as an argument
//and logs the string, with the first word in bold and the last word underlined.

function boldFirstUnderlineLast(str7) {
  console.log(chalk.bold('Let') + ' ' + 'take a string bold the first word and underline the last' + ' ' + chalk.underline('one.'))
}
let text = 'Let take a string bold the first word and underline the last one.';
boldFirstUnderlineLast(text);

// ==================================================================================
console.log(chalk.red.bgWhite("============================Question 8================================"))

// 8. Write a function called commandLineChalk that takes the arguments entered in the command line. 
// The function should log out whatever was entered into the terminal, in a color of your choice. 
// Try adding more command line argument options so you can specify the color, background color, etc.
//  Hint: Take a look at process.argv.

 function commandLineChalk(str) {
   console.log(chalk.bgCyan.italic.bold(str))
 }
commandLineChalk(process.argv[2]);






