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
