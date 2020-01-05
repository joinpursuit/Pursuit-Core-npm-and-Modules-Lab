const { filterFilesFn } = require("./filterFiles.js")
const folder = process.argv[2]
const ext = "." + process.argv[3]

const test = (err, list) => {
  if (err !== null) {
    console.log("these was an error")
    console.log(err)
  } else {
    console.log(list)
  }
}

console.log(folder)
console.log(ext)

filterFilesFn(folder, ext, test)
