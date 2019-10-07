let chalk = require("chalk");
console.log(chalk)
console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello world!'));

const stringToColor = (string, color) => {
    console.log(chalk[color](string));
}
stringToColor("test", "red");


const evensBlueOddsYellow = (string) => {
    let newString = string.split(" ");
    let tempArr = [];
    for(let i = 0; i < newString.length; i++) {
        let index = newString.indexOf(newString[i])
        if(index % 2 === 0) {
            index = chalk.blue(newString[i])
            tempArr.push(index);
        } else {
            index = (chalk.yellow(newString[i]))
            tempArr.push(index);
        }
    }
    let j = 0;
    while(tempArr.length > j) {
        tempArr[j] += " "
        j++;
    }
    let finalString = tempArr.join("");
    console.log(finalString);
}
evensBlueOddsYellow("This is a test");


const angryText = (string) => {
    let result = chalk.red.underline.bold(string.toUpperCase());
    console.log(result);
}
angryText("Dang it");


const backgroundCyan = (string) => {
    console.log(chalk.bgKeyword('cyan')(string));
}
backgroundCyan("lol");


const boldFirstUnderlineLast = (string) => {
    let stringToArray = string.split(" ");
    console.log(stringToArray);
    stringToArray[0] = chalk.bold(stringToArray[0]);
    stringToArray[stringToArray.length - 1] = chalk.underline(stringToArray[stringToArray.length - 1])
    for(let i = 0; i < stringToArray.length; i++) {
        let temp = stringToArray[i];
        temp += " ";
    }
    console.log(stringToArray.join(" "))
}
boldFirstUnderlineLast("bold First Underline Last");
