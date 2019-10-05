const chalk = require("chalk");

function helloBlue() {
    console.log(chalk.blue("Hello world"));
}

helloBlue();



function helloRed() {
    console.log(chalk.red("Hello world"));
}

helloRed();



function stringToColor(str, color) {
    
    console.log(chalk.keyword(color)(str))
}

stringToColor("this is a test", "red");



function evensBlueOddsYellow(str) {
   let strSplit = str.split(" ");

   for(let i of strSplit) {
       if(strSplit.indexOf(i) % 2 === 0) {
           console.log(chalk.yellow(i))
       }
       else {
           console.log(chalk.blue(i))
       }
   }
}

evensBlueOddsYellow("this is a test")





function angryText(str) {
    let capitalized = str.toUpperCase();
    console.log(chalk.red.bold.underline(capitalized));
}

angryText("i want to go home")






function backgroundCyan(str) {
    console.log(chalk.white.bgCyan(str));
}

backgroundCyan("I could use a water")



function boldFirstUnderlineLast(str) {
    let strSplit = str.split(" ");

    if (strSplit.length < 2) {
        console.log("You should input a string with at least two words to get the full effect");
    }

    for (let i of strSplit) {
        if (strSplit.indexOf(i) === 0) {
            console.log(chalk.bold(i));
        } else if (strSplit.indexOf(i) === (strSplit.length - 1)) {
            console.log(chalk.underline(i));
        } else {
            console.log(i);
        }
    }
}

boldFirstUnderlineLast("hi");
boldFirstUnderlineLast("This is a great project we got here")






process.argv.forEach(function(str){
            if (str.length === 1) {
                console.log(chalk.green(str));
            } else if (str.length === 2) {
                console.log(chalk.inverse.red(str));
            } else if (str.length === 3) {
                console.log(chalk.dim.blue(str));
            } else if (str.length === 4) {
                console.log(chalk.cyan.bgWhiteBright(str));
            } else {
                console.log(chalk.bold.underline(str))
            }
  })