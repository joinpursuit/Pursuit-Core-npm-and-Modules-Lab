const chalk = require("chalk")

// 1.
const helloBlue = chalk.blue("hello world")
console.log(helloBlue)

//2.
const helloRed = chalk.red("hello world")
console.log(helloRed)

//3.
const stringToColor = (str, color) => {
  console.log(chalk`{${color} ${str}}`)
}
stringToColor("this is a test", "red")

//4.
const evenBlueOddsYellow = str => {
  let newStr = str.split(" ")
  for (let idx = 0; idx < newStr.length; idx++) {
    if (idx % 2) {
      console.log(chalk.yellow(newStr[idx]))
    } else {
      console.log(chalk.blue(newStr[idx]))
    }
  }
}
evenBlueOddsYellow("this is a test")

//5.
const angryText = str => {
  let newStr1 = ""
  for (let i = 0; i < str.length; i++) {
    newStr1 += str[i].toUpperCase()
  }
  console.log(chalk.red.bold.underline(newStr1))
}
angryText("I am angry")

//6.
const backgroundCyan = str => {
  console.log(chalk.white.bgCyan(str))
}
backgroundCyan("hi")

//7.
const boldFirstUnderlineLast = str => {
  let newStr2 = str.split(" ")
  for (let i = 0; i < newStr2.length; i++) {
    if (i === 0) {
      console.log(chalk.bold(newStr2[i]))
    } else if (i === newStr2.length - 1) {
      console.log(chalk.underline(newStr2[i]))
    } else {
      console.log(newStr2[i])
    }
  }
}
boldFirstUnderlineLast("corey is back")

//8.
// const commandLineChalk = () => {
//   process.argv.forEach((test, test2) => {
//     console.log(`${test} ${test2}`)
//   })
// }
// console.log(process.argv)
const commandLineChalk = arg => {
    let arr = arg.slice(2)
    console.log(chalk.bold.red(arr))
}
commandLineChalk(process.argv)