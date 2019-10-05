function func(folder, ext, callback) {

  const fs = require('fs')
  const path = require('path')

  fs.readdir(folder, (err, files) => {

    if (err) {
      callback(err)
      return;
    }

    let filtered = files.filter((file) => {
      if (path.extname(file) === ext) {
        return file
      }
    })
    callback(null, filtered)
  })

}

module.exports = {
  func
}