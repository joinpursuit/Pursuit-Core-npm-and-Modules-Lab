const filterFilesFn = require("./filterFiles.js")
const folder = process.argv[2]
const ext = '.' + process.argv[3]


filterFilesFn.func(folder, ext, (err, list) => {
  if (err) {
    console.log('there was an error')
  }
  else {

    list.forEach(elem => {
      console.log(elem)
    })
  }
})