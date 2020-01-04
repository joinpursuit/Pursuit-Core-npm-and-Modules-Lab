const chalk = require("chalk");

const myFunction = require("./myFunctions.js")

// console.log(chalk.bgBlueBright("Hello world"))

myFunction.helloBlue();

myFunction.helloRed();

myFunction.stringToColor("This is a test", "orange");

myFunction.evensBlueOddsYellow("This is a test but longer to really check this function out")

myFunction.angryText("What are you doing?!")

myFunction.backgroundCyan("Deep breath. Everything will be okay.")

myFunction.boldFirstUnderlineLast("This is a test that should bold the first word and underline the last.")

myFunction.commandLineChalk()