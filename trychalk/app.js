const chalk = require('chalk');

//logs text in blue
const helloBlue = (str) => {
    console.log(chalk.blue(str)) ;
}
helloBlue('Hello World');

//logs text in red
const helloRed = (str) =>{
    console.log(chalk.red(str));
}

helloRed('Hello World');

//logs string in identified color
const stringToColor = (string, color) => {
    console.log(chalk[color](string));
}

stringToColor('hi', 'green');

//log string in yellow and blue depending on their order
const evensBlueOddsYellow = (str) =>{
    let strArray = str.split(' ');
    let blueAndYellowStr = ''; // new str to push edited 
    console.log(strArray) // turns str into an array
    for(let i = 0; i < strArray.length; i++){
        if(i % 2 === 0){
            let blue = chalk.blue(strArray[i]);
            blueAndYellowStr += blue +" ";
        } else{
           let yellow = chalk.yellow(strArray[i]);
            blueAndYellowStr += yellow + " ";
        }
    }
    console.log(blueAndYellowStr)
}
evensBlueOddsYellow('I am very tired');

//logs str in red, underlined and caps
const angryText = (str) => {
    let string = str.toUpperCase()
    // console.log(string);
    console.log(chalk.underline.bold.red(string))
}

angryText('hi');

//logs str in white and cyan background color
const backgroundCyan = (str) => {
    console.log(chalk.white.bgCyan(str));

}
backgroundCyan('whoops');

//log first word bold and last word underlined.
const boldFirstUnderlineLast = (str) =>{
   let strArr = str.split(' ');
   let newStr = ' ';
//    console.log(strArr);
   for(let i = 0; i < strArr.length; i++){
       if(i === 0){
        let bold = chalk.bold(strArr[i]);
        newStr += bold + ' ';
       }else if(i ===strArr.length -1){
        let underline = chalk.underline(strArr[i])
        newStr += underline + ' ';
    }else{
        newStr += strArr[i] + ' '
    }
   }
   console.log(newStr)
}

boldFirstUnderlineLast('oops i did it again');

//logs whatever you put into terminal 
const commandLineChalk = () =>{
    
}