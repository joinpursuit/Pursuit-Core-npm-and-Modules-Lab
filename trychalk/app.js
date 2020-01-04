const chalk = require("chalk");

const helloBlue = () =>{
    return chalk.blue("Hello World")
}

const helloRed = () =>{
    return chalk.red("Hello World")
}

const stringToColor = (str, color) =>{
    return chalk.keyword(color)(str)
}

const evensBlueOddsYellow = (str) =>{
    let output = str.split(" ");
    let newArr = []
    for(let i = 0; i < output.length; i++){
        if(i % 2 === 0){
            newArr.push(chalk.yellow(output[i]))
        }else{
            newArr.push(chalk.blue(output[i]))
        }
    }
    return newArr.join(" ")
}
const angryTest = (str) =>{
    return chalk.red.underline.bold(str)
}
const backgroundCyan = (str) =>{
    return chalk.white.bgCyan(str)
}
const boldFirstUnderlineLast = (str) =>{
    let newArr = str.split(" ");
    let newStr = [];
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === newArr[0]){
            newStr.push(chalk.bold(newArr[0]))
        }
        else if(newArr[i] === newArr[newArr.length - 1]){
            newStr.push(chalk.underline(newArr[newArr.length - 1]))
        }else{
            newStr.push(newArr[i])
        }
    }
    return newStr.join(" ")
}
const commandLineChalk = (str)=>{

    process.argv.forEach((str, color) => {
        return(`${color}: ${str}`);
      })
    
}

console.log(helloBlue());
console.log(helloRed());
console.log(stringToColor("this is a test", "orange"));
console.log(evensBlueOddsYellow("this is a test"));
console.log(angryTest("this is a test"));
console.log(backgroundCyan("this is a test"))
console.log(boldFirstUnderlineLast("this is a test"))