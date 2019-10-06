`# Playing with modules in Node.js Lab

In this lab you will be learning how to use `npm` to install 3rd party modules as well as how to create your own modules, how to export it, import it and use it.

## 1. Chalk

### Setup

- In a new folder `trychalk`, create an `app.js` file.
- While being in the `trychalk` directory, in the command line, you will want to execute `npm init`<sup>[1](https://docs.npmjs.com/cli/init)</sup>, which will begin setting up a `package.json` file. You can do `npm init --yes` to accept all the defaults, or just `npm init` to have more control of what gets put on your initial `package.json`. Take a look at the newly created `package.json` in your folder. 
- Enter `npm install chalk`. This will install the `chalk` module as a dependency for your project.
  - In your `package.json`, under `dependencies`, you should see `chalk` followed by a version number.
  - A `node_modules` folder should've been created, with a number of sub-folders. These should include the folder for the `chalk` module and a folder for each module that chalk depends on.
- In your `app.js` file, require the `chalk` module. With npm modules(3rd party modules), like with the core node modules, you can just enter the name of the module as the string for `require`. You do not need to enter the entire path.
- Read the [chalk module documentation](https://www.npmjs.com/package/chalk)

### Exercises

1. Write a function called `helloBlue` that will log the string `'Hello world'` in blue.
2. Write a function called `helloRed` that will log the string `'Hello world'` in red.
3. Write a function called `stringToColor`. It should take two arguments: a string and a color. The function should log the string to the console in the given color. For example, `stringToColor('this is a test', 'red')` will log  `this is a test` in red.
4. Write a function called `evensBlueOddsYellow` that takes a string as an argument. It should log all words at an even position/order in blue and all words in an odd position in yellow. For example, `evensBlueOddsYellow('this is a test')` will log `'this'` in yellow, `'is'` in blue, `'a'` in yellow, and `'test'` in blue.
5. Write a function called `angryText` that takes a string as an argument. It should log that string in red, underlined, and bold capital letters.
6. Write a function called `backgroundCyan` that takes a string as an argument, and logs that string in white font color and cyan background-color (check the chalk documentation to see how to change background colors).
7. Write a function called `boldFirstUnderlineLast` that takes a string as an argument and logs the string, with the first word in bold and the last word underlined.
8. Write a function called `commandLineChalk` that takes the arguments entered in the command line. The function should log out whatever was entered into the terminal, in a color of your choice. Try adding more command line argument options so you can specify the color, background color, etc. **Hint**: Take a look at `process.argv`.

## 2. Build your own module

### Setup

- Create a new folder.
- Add a `main.js` file to the folder.
- Add a `math-module.js` file to your folder

### Exercises
- In the `math-module.js` file add a function called `sum`. The `sum` function should take two arguments and return their sum.

  Example:

  ```js
  sum(3, 6); //returns 9
  ```

- Add a `module.exports` statement at the bottom of the `math-module.js` file.
- Add the `sum` function to `module.exports`.
- In the `main.js` file, use the `require` keyword to import the `math-module.js` file.
- Call the `sum` function from the `main.js` file and save the result to a new variable.
- Add a `console.log` statement that logs the saved variable.
- Open the terminal and run the `main.js` file. You should see the output from the `sum` function
- Add three more functions to the `math-module.js` file:
  1. A `multiply` function (takes two arguments and returns their product).
  2. A `divide` function (takes two arguments and returns the first argument divided by the second).
  3. A `square` function (takes one argument and returns its square).

  Examples:

  ```js
  multiply(2, 5); //returns 10
  divide(20, 10); //returns 2
  square(5); //returns 25
  ```

- Export the `multiply`, `divide`, and `square` functions by adding them to `module.exports` in the `math-module.js` file.
- In the `main.js` file, use the imported `math-module.js` file to call the three new functions, and save the results as new variables
- Log the saved variable.
- Open the terminal and run the `main.js` file. You should see the output from all the functions.

## 3. String Module

- Create a new file called `strings-module.js` that contains at least the string functions 
  - `firstChar` - returns the first character.
  - `compare` - compares string A to string B if they are equal return true.
  - `reverse` - reverse the string passed as an argument
  - Come up with one of your own functions.
- Import the `string-module` into the `main.js` file and try calling and logging the functions from `string-module`.
- Can you also import the `string-module` into the `math-module` and use it in there? Or vice versa?

## 4. Bonus/Challenge - Files By Extension

The following is a code for an program that takes a user's input of a folder and an extension, and lists all the files in that folder that have the given extension.

```js
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
```

In a new folder, create the files `filterFiles.js` and `main.js`. 

1. Paste the above code into `filterFiles.js` and rewrite it as follows:

- Do not take any input from the user (i.e. remove lines that make use of the `process` object).
- Wrap the code in a function that takes as arguments a folder name, an extension, and a callback function.
- Change the `forEach` method call to `filter`: instead of logging the files, return a new array that contains only the files with the desired extension. Save the filtered array to a new variable.
- If there is an error while reading the folder, invoke the callback with the error.
- Otherwise, invoke the callback at the bottom of the `readDir` function with two arguments: `null` and the filtered file array.
- Export the function using `module.exports`.

2. In `main.js` do the following:

- Import the function from `filterFiles.js` as `filterFilesFn`.
- Read the input for folder and extension from the user (using the `process` object).
- invoke the function with the following arguments:
  - the folder
  - the extension
  - a callback function that takes as arguments an error object and a list. If the error object is not `null`, it logs the string: `'there was an error'` followed by the error. Otherwise, it logs the list, with each element in a separate line.

### References 
1. [`npm init`](https://docs.npmjs.com/cli/init) docs page.
