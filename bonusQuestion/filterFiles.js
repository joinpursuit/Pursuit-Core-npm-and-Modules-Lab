const fs = require('fs')
const path = require('path')

const filter = () => {
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