// Do not take any input from the user (i.e. remove lines that make use of the `process` object).
// - Wrap the code in a function that takes as arguments a folder name, an extension, and a callback function.
// - Change the `forEach` method call to `filter`: instead of logging the files, return a new array that contains only the files with the desired extension. Save the filtered array to a new variable.
// - If there is an error while reading the folder, invoke the callback with the error.
// - Otherwise, invoke the callback at the bottom of the `readDir` function with two arguments: `null` and the filtered file array.
// - Export the function using `module.exports`.

const fs = require('fs')
const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

const fs_function = (folder, ext, callback){

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

}

