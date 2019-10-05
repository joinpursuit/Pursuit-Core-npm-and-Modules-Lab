const chalk = require('chalk');

const helloBlue = (str) =>{
    console.log(chalk.blue('Hello World'))
}
helloBlue();

const helloRed = (str) => {
    console.log(chalk.red('Hello World'))
}
helloRed();

const stringToColor = (str, color) => {
  console.log(chalk.keyword(color)(str))
}
stringToColor("this is a test", "red")

const evensBlueOddsYellow = (str) =>{
    let split =  str.split(" ")
    let string = " "
    for(let i = 0; i < split.length; i++)
   { if(i % 2 !== 0){
       string += chalk.blue(split[i] + " ")
    //    console.log(string) 
    }
    else{
        string += chalk.yellow(split[i] + " ")
        // console.log(string)
    }}
    console.log(string )
}
evensBlueOddsYellow("this is a test")

const angryText = (str) => {
 console.log( chalk.red.underline.bold(str))
}
angryText("This is a test")

const backgroundCyan = (str) => {
    console.log(chalk.white.bgCyan(str))
}
backgroundCyan("This is a test")

const boldFirstUnderlineLast = (str) => {
    let split = str.split(" ")
    let empString = " "
    empString += chalk.bold(split[0] + " ")
    for( let i = 1; i < split.length - 1; i++){

            empString += split[i] + " "
        }
    
         empString += chalk.underline(split[split.length - 1] + " ")
    
        console.log(empString)
}

boldFirstUnderlineLast("this is a test")

const commandLineChalk = () => {
   let argv = process.argv.slice(2);
    let string = argv[0]
    let strColor = argv[1]
    let word = chalk.keyword(strColor)(string)

    console.log(word)
}
commandLineChalk()