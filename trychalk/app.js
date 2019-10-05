const chalk = require("chalk");

const myFunction = require("./myFunctions.js")

// console.log(chalk.bgBlueBright("Hello world"))

myFunction.helloBlue();

myFunction.helloRed();

myFunction.stringToColor("This is a test", "orange");

myFunction.evensBlueOddsYellow("This is a test but longer to really check this function out")

