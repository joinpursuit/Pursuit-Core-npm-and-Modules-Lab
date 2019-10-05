const chalk = require('chalk')

const helloBlue = () => {
  console.log(chalk.blue('Hello world'))
}

const helloRed = () => {
  console.log(chalk.red('Hello world'))
}

helloBlue()
helloRed()

const stringToColor = (string, color) => {
  console.log(chalk[color](string))
}

stringToColor('hi', 'green')

const evensBlueOddsYellow = (string) => {
  let splitted = string.split(' ')
  for (i = 0; i < splitted.length; i = i + 2) {
    console.log(chalk.yellow(splitted[i]))
    console.log(chalk.blue(splitted[i + 1]))
  }
}

evensBlueOddsYellow('this is a test')

const angryText = (string) => {
  let uppercased = string.toUpperCase()
  console.log(chalk.red.bold(uppercased))
}

angryText('danger danger')

const backgroundCyan = (string) => {
  console.log(chalk.bgCyan(string))
}

backgroundCyan('cloud')

const boldFirstUnderlineLast = (string) => {
  let splitted = string.split(' ')
  let first = splitted.shift()
  let last = splitted.pop()
  let middle = splitted.join(' ')
  console.log(chalk.bold(first) + ' ' + middle + ' ' + chalk.underline(last))
}

boldFirstUnderlineLast('trying to see if this works')

const commandlineChalk = () => {
  let input = process.argv
  let message = []
  for (i = 4; i < input.length; i++) {
    message.push(input[i])
  }
  message = message.join(' ')
  bgColor = input[3].split('')
  bgColor[0] = bgColor[0].toUpperCase()
  bgColor = bgColor.join('')
  bgArgument = 'bg' + bgColor
  console.log(chalk[input[2]][bgArgument](message))
}

commandlineChalk()
