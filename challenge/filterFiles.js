// Joseph P. Pasaoa
// Filter Module
//



/* MODULE INITS */
const fs = require('fs')
const path = require('path')



const findFiletypes = (folderName, ext, whatNext) => {
  fs.readdir(folderName, (err, files) => {
      if (err) {
        whatNext(err);
        return;
      }

      let foundArr = files.filter(file => {
          return path.extname(file) === '.' + ext;
      });

      return whatNext(null, foundArr);
  });
}



module.exports = {
  filterFilesFn: findFiletypes
}
