const fs = require('fs')
const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

const filterFilesFn = (fName,ext, fn) =>{
    let dExt = []
    
    fs.readdir(folder, (err, files) => {
        if (err) {
            fn(err);
            return;
        }
        
        files.filter((file) => {
            if (path.extname(file) === ext) {
                dExt.push(file)
            }
        })

        fn("null", dExt)
    })
}

module.exports = {
    filterFilesFn
}