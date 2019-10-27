const chalk = require('chalk');
console.log(chalk.blue('hello world!'));
const log = console.log;

log(chalk.blue('hello') + ' world' + chalk.red('!'))
log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);


const helloBlue = () => console.log(chalk.blue('Hello world'));
helloBlue();
const helloRed = () => console.log(chalk.red('Hello world'));
helloRed();
const stringToColor = (str, color) => console.log(chalk[color](str));
stringToColor('this is a test', 'red');
const evensBlueOddsYellow = (str) => console.log(str.split(' ').map(wrd => chalk[str.split(' ').indexOf(wrd) % 2 ? 'blue' : 'yellow'](wrd)).join(' '));
evensBlueOddsYellow('this is a test');
const angryText = (str) => console.log(chalk.red.bold.underline(str));
angryText('this is a test');
const backgroundCyan = (str) => console.log(chalk.bgCyan.white(str));
backgroundCyan('this is a test');
const boldFirstUnderlineLast = (str) => {
    console.log(
        str
        .split(' ')
        .map(wrd => str.split(' ').indexOf(wrd) === 0 ? chalk.bold(wrd) : (wrd))
        .map(wrd => str.split(' ').indexOf(wrd) === str.split(' ').length - 1 ? chalk.underline(wrd) : (wrd))
        .join(' ')
    );
}
boldFirstUnderlineLast('this is a test');
const commandLineChalk = () => console.log(chalk`{${process.argv.slice(3).join('.')} ${process.argv[2]}}`)
commandLineChalk();
