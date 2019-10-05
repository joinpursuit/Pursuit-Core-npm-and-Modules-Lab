const chalk = require('chalk')
 

const helloBlue = (str) => {
  console.log(chalk.blue(str))
}

helloBlue('Blue Hello World!');



const helloRed = (str) => {
  console.log(chalk.red(str))
}

helloRed('Red Hello World!');



const stringToColor = (string, color) => {
  console.log(chalk[color](string))
}

stringToColor('This string is green', 'green');



const evensBlueOddsYellow = (str) => {
  let arr = str.split(" ")
  let newStr = ""
  for (let i = 0; i < arr.length; i++){
      if (i % 2 === 0) {
        let evenBlue = chalk.blue(arr[i])
        newStr += evenBlue + " "
   } else if (i % 2 !== 0){
       let oddYellow = chalk.yellow(arr[i])
       newStr += oddYellow + " "
   } 
  }
  console.log(newStr)
}

evensBlueOddsYellow("Even index is Blue, Odd index is Yellow");



const angryText = (str) => {
    let string = str.toUpperCase()
   console.log(chalk.bold.red.underline(string));
}

angryText("Angry Red Text");


const backgroundCyan = (str) => {
   console.log(chalk.bgCyan.white(str))
}

backgroundCyan("White text");


const boldFirstUnderlineLast = (str) => {
    let arr = str.split(" ")
    let newStr = ""
    for (let i = 0; i < arr.length; i++){
        if (i === 0) {
          let bold = chalk.bold(arr[i])
          newStr += bold + " "
     } else if (i === (arr.length - 1)){
         let underlined = chalk.underline(arr[i])
         newStr += underlined + " "
     } else {
         newStr += arr[i] + " "
     }
    }
    console.log(newStr)
}

boldFirstUnderlineLast('First word is bold, last is underlined');



const commandLineChalk = () => {
    
}