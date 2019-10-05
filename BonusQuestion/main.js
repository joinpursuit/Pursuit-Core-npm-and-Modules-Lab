let myFilter = require('./filterFiles');

let folder = process.argv[2];
let extension = process.argv[3];

myFilter.myFilter(folder, extension)