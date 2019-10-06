const fs = require('fs');
const path = require('path');

// const folder = process.argv[2];
// const ext = '.' + process.argv[3];

const findFiles = (folder, extention, callback) => {
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        const arr = files.filter((file) => {
            if (path.extname(file) === ext) {
                return file;
            }
        })
        return arr;
    })
}