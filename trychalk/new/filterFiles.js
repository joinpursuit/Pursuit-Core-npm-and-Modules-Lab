const someFunction = (folderName, extension, callback) => {
    const fs = require('fs')
    const path = require('path')

    // const folder = process.argv[2]
    // const ext = '.' + process.argv[3]

    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        files.filter((file) => {
            if (path.extname(file) === ext) {
                return file;
            }
        })
    })
}