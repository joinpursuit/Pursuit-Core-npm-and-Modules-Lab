const lineBreak = ('-----------------------------------------')
const chalk = require('chalk')

// console.log(chalk.supportsColor)

//1.)
const helloBlue = (str) => {
  console.log(chalk.blue(str))
}

helloBlue('Hello world')

console.log(lineBreak)

//2.)
const helloRed = (str) => {
    console.log(chalk.red(str))
}

helloRed('Hello world')

console.log(lineBreak)

//3.)
const stringToColor = (str, color) => {
   console.log(chalk[color](str)) 
}

// stringToColor('this is a test', 'white')
stringToColor('this is a test', 'green')

console.log(lineBreak)

//4.)
const evenBlueOddsYellow = (str) => {
    const newStr = str.split(' ')
    const result = []
    for (i = 0; i < newStr.length; i++){
        if (newStr.indexOf(newStr[i]) % 2 === 0){
          result.push(chalk.blue(newStr[i]))
        } else if (newStr.indexOf(newStr[i]) % 2 === 1){
           result.push(chalk.red(newStr[i]))
        }
    }
    console.log(result.join(' '))
}

evenBlueOddsYellow('this is a test')

console.log(lineBreak)

//5.)
const angryText = (str) => {
    console.log(chalk.bold.underline.red(str))
}

angryText('yerrrrrr')

console.log(lineBreak)

//6.)
const backgroundCyan = (str) => {
    console.log(chalk.white.bgCyan(str))
}

backgroundCyan('The background is cyan and the text is white')

console.log(lineBreak)

//7.)
const boldFirstUnderlineLast = (str) => {
    let newStr = str.split(' ')
    let result = []

    if (newStr.length > 2){
        for (i = 0; i < newStr.length; i++){
            if (newStr.indexOf(newStr[i]) === 0){
                result.push(chalk.bold(newStr[i]))
            } else if (newStr.indexOf(newStr[i]) === (newStr.length - 1)){
                result.push(chalk.underline(newStr[i]))
            } else {
                result.push(newStr[i])
            }
        }
    }
    else {
        result.push(chalk.bold.underline(newStr))
    }
    console.log(result.join(' '))
}

boldFirstUnderlineLast('what is going on here')
boldFirstUnderlineLast('what')

console.log(lineBreak)

//8.)
console.log("process argv", process.argv)
let commandLineStr = process.argv.slice(2)
const commandLineChalk = (string, color, backgroundColor) => {
    console.log(chalk[color](string))
}
commandLineChalk(commandLineStr[0], commandLineStr[1])

