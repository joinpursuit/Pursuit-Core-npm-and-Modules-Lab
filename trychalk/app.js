const chalk = require('chalk')

//Number One
const helloBlue = (str) => chalk.blue(str)
console.log(helloBlue('hello world'));


//Number Two
const helloRed = (str) => chalk.red(str)
console.log(helloRed('hello world'));

//Number Three
const stringToColor = (str, color) => chalk.keyword(color)(str)
console.log(stringToColor('This is a test', 'blue'));

//Number Four
const evensBlueOddsYellow = (str) => {
    let output = ''
    let alternator = 0
    const turnBlue = (letter) => output += chalk.blue(letter) 
    const turnYellow = (letter) => output += chalk.yellow(letter) 
    for (let i = 0; i < str.length; i ++){
        if(str[i] === ' ' && str[i + 1] !== ' '){
            alternator ++
            output += ' '
        }else if (alternator % 2 === 0){
            turnYellow(str[i])
        }else{
            turnBlue(str[i])
        }
    }
    return output
}

console.log(evensBlueOddsYellow('this is a test'));

//Number Five
const angryText = (str) => chalk.bold.underline.red(str)
console.log(angryText(`NOW I'M MAD`));

//Number Six
const BackgroundCyan = (str) => chalk.white.bgCyan.bold(str)
console.log(BackgroundCyan(`Hola`));

//Number Seven
//turn into an array then edit index 0 and arr.length - 1

//Number Eight

const commandLineChalk = (arg) =>{
    let str = arg[0]
    let color = arg[1]
    return console.log(chalk.keyword(color)(str))
}

let myArgs = process.argv.slice(2);
commandLineChalk(myArgs)