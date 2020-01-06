const chalk = require("chalk");

const helloBlue  = () => {
  console.log(chalk.blue("Hello world"))
}
helloBlue()

const helloRed  = () => {
  console.log(chalk.red("Hello world"))
}
helloRed()

const stringToColor = (str, color) => {
  console.log(chalk.keyword(color) (str))
}

stringToColor("Halloween", "orange")

const evensBlueOddsYellow = (str) => {
  let words = str.split(" ")
  for (let i = 0; i < words.length; i++){
    i % 2 ? words[i] = chalk.yellow(words[i]) : words[i] = chalk.blue(words[i])
  }
  console.log(words.join(" "))
}
evensBlueOddsYellow("this is a test")