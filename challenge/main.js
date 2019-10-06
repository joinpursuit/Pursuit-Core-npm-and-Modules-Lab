// Joseph P. Pasaoa
// Bonus/Challenge Question
//



/* MODULE INITS */
const filters = require('./filterFiles.js');

/* HELPERS */
const log = console.log;



if (process.argv.length < 4) {
  log('Error: missing folderPath and extension(omit period) arguments. Please try again');
} else {
  let askedFolder = process.argv[2];
  let askedExt = process.argv[3];

  filters.filterFilesFn(askedFolder, askedExt, (err, arr) => {
      if (err) {
        log('there was an error: ', err);
        return;
      }
      arr.forEach(file => {
          return log(file);
      });
  });
}
