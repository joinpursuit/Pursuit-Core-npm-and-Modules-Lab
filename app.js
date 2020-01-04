const chalk = require('chalk')
console.log("question 1")
console.log(chalk.blue("Hello World"))
console.log("question 2")
console.log(chalk.red("Hello World"))
console.log("question 3")
const stringToColor =(str)=>{
    console.log(chalk.red('this is a test')+ " "+ "in red")
}
stringToColor()

console.log("question 4")
const evensBlueOddYellow = (str)=>{
    let newArr = str.split(" ");
   
    let output = "";

    newArr.forEach(el => {
        if(el % 2 === 0){
            output += `${chalk.blue(newArr[el])}`
            
        } else{
             output += `${chalk.yellow(newArr[el])}`
        }
    });
    
    return output
}

console.log(evensBlueOddYellow("this is a test"))
console.log("question 5")
const angryText = (str)=>{
    let strCap = str.toUpperCase()


    console.log(chalk.red.underline.bold(strCap))
}
angryText("this is a test")