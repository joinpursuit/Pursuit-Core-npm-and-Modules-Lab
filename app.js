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
   
    let output = " ";

        for(let i = 0; i < newArr.length ; i++){
        if(i % 2 === 0){
            output += ` ${chalk.blue(newArr[i])}`
            
        } else{
             output += ` ${chalk.yellow(newArr[i])}`
        }
    } 
    
    return output
}
 console.log(evensBlueOddYellow("this is a test"))

console.log("question 5")
const angryText = (str)=>{
    let strCap = str.toUpperCase()


    console.log(chalk.red.underline.bold(strCap))
}
angryText("this is a test")

console.log("question 6")
console.log(chalk.white.bgCyan("this is a test"))

console.log("question 7")
const boldFirstUnderlineLast = (str) =>{
    let arr = str.split("");
    let output7 = " ";
    for (let i = 0 ; i < arr.length ; i ++){
        if(i[0]){
            output7 += ` ${chalk.bold(arr[i])}`
        } else {
            output7 += ` ${chalk.underline(arr[i].length-1)}`
        }
    }
    return output7
}
console.log(boldFirstUnderlineLast("this is a test"))

console.log("question 8")