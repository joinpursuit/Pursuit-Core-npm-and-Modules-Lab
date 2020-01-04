const chalk = require("chalk")
const helloBlue = () =>{
    console.log(chalk.blue("Hello World"))
}
helloBlue()
const helloRed = () =>{
    console.log(chalk.red("Hello World"))
}
helloRed()

const stringToColor = (string, color)=>{
    console.log(chalk[color](string))

}

stringToColor("hey",'red')