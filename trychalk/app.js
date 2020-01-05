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

