const chalk = require("chalk");


const printBlue =()=>{

    console.log(chalk.blue('hello world'));

}
printBlue()

const printRed =()=>{

    console.log(chalk.red('hello world'));

}
printRed()

// 3. Write a function called `stringToColor`. It should take two arguments: a string and a color. 
//The function should log the string to the console in the given color. For example, 
//`stringToColor('this is a test', 'red')` will log  `this is a test` in red.


const stringToColor =(string,color)=>{

    console.log(color(string));

}
stringToColor("Welcome to JavaScript",chalk.yellow)




// 4. Write a function called `evensBlueOddsYellow` that takes a string as 
//an argument. It should log all words at an even position/order in blue and all 
//words in an odd position in yellow. For example, `evensBlueOddsYellow('this is a test')` 
//will log `'this'` in yellow, `'is'` in blue, `'a'` in yellow, and `'test'` in blue.



const evensBlueOddsYellow =(string)=>{
let colorfulArray = string.split(' ')
    colorfulArray.forEach((element,i) => {
        if(i % 2===0){
            console.log(chalk.blue(element))
        }else if(i % 2 === 1){   
            console.log(chalk.yellow(element))
        }    
    }); 
}
evensBlueOddsYellow("Today is raining and foggy")








// 5. Write a function called `angryText` that takes a string as an argument. It should log that string in red, underlined, and bold capital letters.



const angryText = (string) => {
    console.log(chalk.red.bold.underline(string))
}
angryText("I am angry")

const backgroundCyab = (string) => {
    console.log(chalk.bgCyan.white(string))
}
backgroundCyab("I am happy")

//7. Write a function called `boldFirstUnderlineLast` 
// that takes a string as an argument and logs the string, with the first word in bold and the last word underlined.

const boldFirstUnderlineLast =(string)=>{

let printedString = string.splice(0,1) + 


}
console.log(boldFirstUnderlineLast())