const chalk = require("chalk");   //naming it as a variable

let helloWorld = "Hello world";

console.log("q1");
//Exercises
//1. Write a function called `helloBlue` that will console.log the string 'Hello world' in blue.
const helloBlue = (str) => {
  console.log(chalk.blue(str));
}
helloBlue(helloWorld);

console.log("q2");
//2. Write a function called `helloRed` that will console.log the string 'Hello world' in red.
const helloRed = (str) => {
  console.log(chalk.red(str));
}
helloRed(helloWorld);

console.log("q3");
//3. Write a function called `stringToColor`. It should take two arguments: a string and a color.
//The function should log the string to the console in the given color. For example,
// `stringToColor('this is a test', 'red')` woll log  `"this is a test` in red.
const stringToColor = (str, color) => {
  console.log(chalk.keyword(color)(str));
}
stringToColor("this is a test too", "plum");

console.log("q4");
//4. Write a function called `evensBlueOddsYellow` that takes a string as an argument. It
//should log all even words in blue and all odd words in yellow. For example,
//`evensBlueOddsYellow('this is a test')` will log `'this'` in yellow, `'is'` in blue,
//`'a'` in yellow, and `'test'` in blue.

// const evensBlueOddsYellow = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     (str[i] % 2 === 0) ? (str[i] = chalk.blue(str[i])) : (chalk.yellow(str[i]));
//     }
//     console.log(str);
// }

// evensBlueOddsYellow("this is a test");
//output should be: this, a - yellow; is, test - blue

console.log("q5");
//5. Write a function called `angryText` that takes a string as an argument. It should
//log that string in red, underlined, and bold capital letters.
const angryText = (str) => {
  console.log(chalk.red.underline.bold(str.toUpperCase()));
}
angryText("trying to ignore their loud music");

console.log("q6");
//6. Write a function called `backgroundCyan` that takes a string as an argument, and logs
//that string in white font color and cyan background-color (check the chalk documentation to
//see how to change background colors).
const backgroundCyan = (str) => {
  console.log(chalk.white.bgCyan(str));
}
backgroundCyan("who doesn't like cyan");

console.log("q7");
//7. Write a function called `boldFirstUnderlineLast` that takes a string as an argument
//and logs the string, with the first word in bold and the last word underlined.
// const boldFirstUnderlineLast = (str) => {
//   console.log(chalk.bold(str[0]),)
// }

console.log("q8");
//8. Write a function called `commandLineChalk` that takes the arguments entered in the
//command line. The function should log out whatever was entered into the terminal, in a
//color of your choice. Try adding more command line argument options so you can specify the
//color, background color, etc. **hint**: use `process.argv`.
const commandLineChalk = () => {
  
}
