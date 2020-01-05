const chalk = require("chalk");

const helloBlue = () => {

    console.log(chalk.blue('hello world'));
}

const helloRed = () => {
    console.log(chalk.red('hello world'));

}

const stringColor = (string,color) => {
    console.log(color(string))

}
stringColor("welcome top javascript", chalk.green)


// const evensBlueOddYellow = (string) => {
//     let colorArray = string.split(' ')
//     colorArray.forEach((el, i) => {
//         if (i % 2 === 0) {
//             console.log(chalk.blue(el))
//         } else if ( 1 % 2 === 1) {
//             console.log(chalk.yellow(el))
//         }
        
//     }) 
//  }
// //  const backToString = () => {
// //      return evensBlueOddYellow.toString()
// //  }
//  evensBlueOddYellow("flavored kettle cooked potato chips delicious")
//  console.log(backToString())

const angryText = (string) => {
    console.log(chalk.red.underline.bold(string))
}
angryText("bed is too cold without you")

const backgroundCyan = (string) => {
    console.log(chalk.bgCyan.white(string))
}
backgroundCyan("bed is too cold without you")