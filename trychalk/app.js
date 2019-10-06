const chalk = require('chalk');
const log = console.log

function blue(string){
    log(chalk.blue(string));
}

function red(string){
    log(chalk.red(string));
}

function stringToColor(string, hue) {
 log(chalk[hue](string))
}


// there is a bug in this function
// function evensBlueOddsYellow(string){
//     let stringSplit = string.split(' ');
//     let stringJoin = [];

//     for(let i = 0; i < string.length; i++){
//         if (i % 2 === 0){
//             let blue = chalk.blue(stringSplit[i])
//             stringJoin.push(blue)
//         } else{
//             let yellow = chalk.yellow(stringSplit[i])
//             stringJoin.push(yellow)
//         }
//     }
//     console.log(stringJoin.join(' '));
// } 


const evensBlueOddsYellow = (string) => {
    let stringSplit = string.split(' ');
    let stringJoin = [];
    for (let i = 0; i < stringSplit.length; i++) {
        if (i % 2 === 0) {
            let blue = chalk.blue(stringSplit[i]);
            stringJoin.push(blue)
        } else {
             let yellow = chalk.yellow(stringSplit[i]);
             stringJoin.push(yellow);
         }
    }
    
    console.log(stringJoin.join(' '));
}

function angryText(string, hue){
    log(chalk.red.underline.bold(string));
}

function backgroundCyan(string,hue){
    log(chalk[hue].bgCyan(string));
}

function boldFirstUnderlineSecond(string){
    let strArr = string.split(' ')
    let emptyStr = [];
    for(let word in strArr){
        if (word % 2 !== 0){
            emptyStr.push(chalk.underline(strArr[word]))
        }else{
            emptyStr.push(chalk.bold(strArr[word]))
        }
    }
    console.log(emptyStr.join(' '))
}

function commandLineChalk(){
    const args = process.argv.slice(2);
    console.log(chalk.blue.bold.underline(args.join(" ")));
    
}



blue("hello world");

red("hello world");

stringToColor("what's up", "red");

angryText("angry text")

evensBlueOddsYellow("does this work?")

backgroundCyan("hi this is question 6", 'white')

boldFirstUnderlineSecond("hi jaiden")

commandLineChalk();