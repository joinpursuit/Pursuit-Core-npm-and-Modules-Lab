const chalk = require("chalk")

const helloBlue = () => {
  console.log(chalk.blue("Hello Blue"));
}

const helloRed = () => {
  console.log(chalk.red("Hello Blue"));
}
helloBlue()
helloRed()

const stringToColor = (str,color) => {
 console.log(chalk.keyword(color)(str));
}

stringToColor("This is a test","cyan")

const evensBlueOddsYellow = (str) => {
let strArr = str.split()
let newArr = [];
for(let i = 0; i < str.length; i++){
  if(i % 2 === 0){
    newArr.push(chalk.blue(str).strArr)
  }
}
}
console.log(evensBlueOddsYellow("This is a test"))

const angryText = (str) => {
  console.log(chalk.red.underline.bold(str));
}

angryText("NO");
