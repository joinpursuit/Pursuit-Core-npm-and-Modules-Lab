const chalk = require('chalk')

console.log('----Q1----')
const helloBlue = () => console.log(chalk.blue('hello world'))

helloBlue()

console.log('----Q2----')
const helloRed = () => console.log(chalk.red('hello world'))

helloRed()

console.log('----Q3----')
const stringToColor = (color, str) => console.log(chalk.keyword(color)(str))

stringToColor('cyan', 'hey')

console.log('----Q4----')
const evensBlueOddsYellow = (str) => {
   let newStr = str.split(" ")
   newStr.forEach((el, i) => {
      i % 2 === 0 ? console.log(chalk.yellow(el)) : console.log(chalk.blue(el))
   })
}

evensBlueOddsYellow('this is a test')

console.log('----Q5----')
const angryText = (str) => console.log(chalk.bold.underline.red(str))


angryText('Q4 is working on our nerves')

console.log('----Q6----')
const backgroundCyan = (str) => console.log(chalk.bgCyan.white(str))

backgroundCyan('Brooklyn')

console.log('----Q7----')
const boldFirstUnderlineLast = (str) => {
   let newStr = str.split(" ");
   newStr.forEach((el, i) => {
      if(i === 0) {
         console.log(chalk.bold(el))
      } else if (i === newStr.length - 1) {
         console.log(chalk.underline(el))
      } else {
         console.log(el)
      }
   })
}
   boldFirstUnderlineLast('Brooklyn is the best')

console.log('----Q8----')
const commandLineChalk = () => {
   let res = process.argv.slice(2)
   console.log(chalk.blue.bgGreenBright(res.join(" ")));
}
commandLineChalk();

