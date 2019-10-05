const chalk = require("chalk");   //naming it as a variable

let helloWorld = "Hello world";

//Exercises
//1. Write a function called `helloBlue` that will console.log the string 'Hello world' in blue.
const helloBlue = (str) => {
  console.log(chalk.blue(str));
}
helloBlue(helloWorld);

//2. Write a function called `helloRed` that will console.log the string 'Hello world' in red.
const helloRed = (str) => {
  console.log(chalk.red(str));
}
helloRed(helloWorld);

//3. Write a function called `stringToColor`. It should take two arguments: a string and a color.
//The function should log the string to the console in the given color. For example,
// `stringToColor('this is a test', 'red')` woll log  `"this is a test` in red.
const stringToColor = (str, color) => {
  console.log(chalk.keyword(color)(str));
}
stringToColor("this is a test too", "plum");
