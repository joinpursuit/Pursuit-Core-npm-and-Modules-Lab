const helloBlue = require('chalk');
console.log(helloBlue.blue('Hello world!'));

const helloRed = require('chalk'); 
console.log(helloRed.red('Hello World'))

const chalk = require('chalk')
const stringToColor = (string, color) =>{
    const chosenColor = chalk.keyword(color)
    console.log( chosenColor(string))
}
(stringToColor("This is a test" , "red"))


const evensBlueOddsYellow = (string) =>{
    let words = string.split(" ");
    let coloredString = ""
    let space = " "
    for(let i = 0; i < words.length; i++){
        if(i % 2 === 0){
            coloredString +=chalk.yellow(words[i])
            coloredString += space
        }else{
            coloredString +=chalk.blue(words[i])
            coloredString += space
        }

    }
    console.log( coloredString)
}
evensBlueOddsYellow("it is cold outside")


const angryText = (string) =>{
    let capitalString= string.toUpperCase()
   console.log( chalk.red.bold.underline(capitalString))
}
angryText("hello")


const backgroundCyan = (string) =>{
console.log(chalk.bgCyan.white(string))

}
backgroundCyan("hello")





const boldFirstUnderlineLast = (string) =>{
    let words = string.split(" ");
    let newStr= ""
    
    for(let i = 0; i< words.length; i++){
    let firstWord = words[0]
        let lastWord = words[words.length-1]
        let space = " "
      if(firstWord === lastWord){
          newStr += chalk.bold.underline(words[i])
      }else if (words[i] === firstWord){
           
            newStr += chalk.bold(words[0]) + space
            
            
        }else if(words[i] !== lastWord)  {
            newStr += words[i] + space
            
           
        }else{
          
            newStr += chalk.underline(words[words.length-1]) + space
        }
}
console.log( newStr)
}
boldFirstUnderlineLast("It is cold outside")






// const commandLineChalk = (string, color, backgroundColor) =>{
//     const chosenColor = chalk.keyword(color)
//     const background = chalk.bgKeyword(backgroundColor)
//     console.log(chosenColor(background(string)))
// }
// commandLineChalk("Random String" , "purple" , "yellow")


