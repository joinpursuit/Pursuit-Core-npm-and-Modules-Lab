const chalk = require("chalk")

console.log("Question 1")
const helloBlue = () =>{
    console.log(chalk.blue("Hello World"))
}
helloBlue()

console.log("Question 2")
const helloRed = () =>{
    console.log(chalk.red("Hello World"))
}
helloRed()

console.log("Question 3")
const stringToColor = (string, color)=>{
    console.log(chalk[color](string))
    
}
stringToColor("hey",'red')


console.log("Question 4")
const evensBlueOddsYellow = string => {
    let newStr = string.split(" ");
    let colorStr = "";
    for (let i = 0; i < newStr.length; i++) {
        if (i % 2 === 0) {
            colorStr += chalk.blue(newStr[i]) + " ";

        } else if (i % 2 === 1) {
            colorStr += chalk.yellow(newStr[i]) + " ";
        }
    }
    return colorStr;
}
console.log(evensBlueOddsYellow("Yerrrrrr! What's the vibes?!"));


console.log("Question 5");
const angryText = string => {
    console.log(chalk.red.underline.bold(string));
}
angryText("Coding rocks!");


console.log("Question 6");
const backgroundCyan = string => {
    console.log(chalk.white.bgCyan(string));
}
backgroundCyan("Did it work?")


console.log("Question 7");
const boldFirstUnderlineLast = (string) => {
    let splitStr = string.split(" ");
    let newStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        if (i === 0) {
            newStr += chalk.bold(splitStr[i]) + " ";
        } else if (i === splitStr.length - 1) {
            newStr += chalk.underline(splitStr[i]);
        } else {
            newStr += splitStr[i] + " ";
        }
    }
    return newStr;
}
console.log(boldFirstUnderlineLast("I think I'm getting good at this!"));


console.log("Question 8");
const commandLineChalk = (command, color, bgColor) => {
    let output = "";
    for (let i = 2; i < command.length; i++) {
        output += chalk[color][bgColor](command[i] + " ");
    }
    console.log(output);
}
commandLineChalk(process.argv, "green", "bgBlue");
// console.log(process.argv)