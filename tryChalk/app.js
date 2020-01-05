const chalk = require('chalk')

const helloBlue = ()=>{
    console.log(chalk.blue('Hello world!'));
    
}
helloBlue()

const helloRed = () =>{
    console.log(chalk.red("Hello World!"))
}
helloRed()

const stringToColor = (string, color) =>{
console.log(chalk.keyword(color)(string))
}
stringToColor("Hello World", "magenta")

const evenBlueOddsYellow = (string) =>{
   let split = string.split(" ")
   //console.log(split)
    for(let i = 0; i < split.length; i++){
        if(i % 2 === 1){
          split[i] = (chalk.blue)(split[i])
        } else{
          split[i] = (chalk.yellow)(split[i])
        }
    }
    return split.join(" ")
    
}
console.log(evenBlueOddsYellow("This is a test"))

//question 5
const angryText = (string) => {
  console.log(chalk.red.underline.bold(string))
}
(angryText("Hello World!"))

//question 6
const backgroundCyan = (string) => {
  console.log(chalk.white.bgCyan(string))
}
(backgroundCyan("Hello World!"))

//question 7
const boldFirstUnderlineLast = (string) => {
    let split = string.split(" ")
    for (let i = 0; i <= split.length; i++){
        console.log(chalk.bold(split[0]))
        console.log(chalk.underline(split[split.length-1]))
    }
    return split.join(" ")
}
boldFirstUnderlineLast("Hello World")

// question 8