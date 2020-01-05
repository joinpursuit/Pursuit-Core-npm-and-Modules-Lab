const chalk = require("chalk")

const helloBlue = (string) => console.log(chalk.blue(string))
helloBlue("Hello World!")

const helloRed = (string) => console.log(chalk.red(string))
helloRed("Hello World!")

const stringToColor = (string,color) => chalk.keyword(color)(string)
console.log(stringToColor("Hello","red"))

const evensBlueOddsYellow = (string, color1, color2) => {
    let array = string.split(" ")
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        if (i%2 === 0){
            array2.push(chalk.keyword(color1)(array[i]))
        } else {
            array2.push(chalk.keyword(color2)(array[i]))
        }
    }
    return array2.join(" ")
}

console.log(evensBlueOddsYellow("I am Here","blue","yellow"))

const angryTex = (string, color) => chalk.keyword(color).bold.underline(string)
console.log(angryTex("I am Loco","red"))

console.log((chalk.red('Hello', chalk.underline.bgBlue('world') + '!')))



// const backgroundCyan = (string,color,backcolor) => chalk[keyword(color)](chalk[keyword(backcolor)](string))
// console.log(backgroundCyan("Here","white","bgCyan"))



const boldFirstUnderlineLast = (string) => {
    let array = string.split(" ")
    let array2 = array.map((word, i) => {
        if(i===0){
        return chalk.bold(word)
        } else if (i===(array.length-1)){
        return chalk.underline(word)
        } else {
            return word
        }
    })
    return array2.join(" ")
}

console.log(boldFirstUnderlineLast("This is too much"))


const commandLineChalk = (color) => {
    process.argv.map(argument => {
        return chalk.keyword(color)(argument)
    })
}

console.log(commandLineChalk("red"))