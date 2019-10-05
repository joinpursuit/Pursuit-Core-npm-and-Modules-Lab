const chalk = require("chalk")

function helloBlue() {
  console.log(chalk.blue('Hello world'))
}

function helloRed() {
  console.log(chalk.red('Hello world'))
}

function stringToColor(string, color) {
  let myColor = chalk.keyword(`${color}`)
  //console.log(chalk[color](string))
  console.log(myColor(`${string}`))
}

function evensBlueOddsYellow(string) {
  let arr = string.split(" ")
  let newStr = ""
  for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 1) {
      newStr += chalk.blue(arr[i]) + " "

    }
    else if (i % 2 === 0) {
      newStr += chalk.yellow(arr[i]) + " "
    }

  }

  console.log(newStr)
}

function angryText(string) {
  console.log(chalk.red.underline.bold(`${string}`.toUpperCase()))
}

function backgroundCyan(string) {
  console.log(chalk.white.bgCyan(`${string}`));
}

function boldFirstUnderlineLast(string) {
  let arr = string.split(" ")
  let firstword = arr[0]
  let lastword = arr[arr.length - 1]
  arr.shift();
  arr.pop()
  console.log(chalk.bold(firstword) + " " + arr.join(" ") + " " + chalk.underline(lastword))
}

function commandLineChalk(arg) {
  for (let i = 0; i < process.argv.length; i++) {
    console.log(i + ' -> ' + (chalk.green.bgBlack(process.argv[i])));
  }
}
stringToColor("hello", 'orange');
evensBlueOddsYellow('this is a test')
angryText('im angry')
backgroundCyan("this background")
boldFirstUnderlineLast("this is a test")
commandLineChalk()