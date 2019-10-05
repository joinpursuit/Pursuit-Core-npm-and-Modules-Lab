const fs = require('fs')
const path = require('path')

//const folder = process.argv[2]
//const ext = '.' + process.argv[3]

const callBack = (error, files) => {
    if (error) {
        console.log('There was an error', error)
    } else if (files.length) {
        for (let file of files) {
            console.log(file);
        }
    } else {
        console.log('No matches')
    }
}


const myFilter = (folderName, fileExtension) => {
    let filteredFiles;

    fs.readdir(folderName, (err, files) => {
      if (err) {
        callBack(err, filteredFiles);
        return;
      }
    
      filteredFiles = files.filter((file) => {
        if (path.extname(file) === fileExtension) {
          return file;
        }
      })
      callBack(err, filteredFiles)
    })
}

module.exports = {
    myFilter
}

