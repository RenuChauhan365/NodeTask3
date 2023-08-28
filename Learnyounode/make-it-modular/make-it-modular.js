const mymodule = require('./mymodule');


const dirName = process.argv[2];
const extFilter = process.argv[3];

mymodule(dirName, extFilter, (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  data.forEach(file => {
    console.log(file);
  });
});


//  this is for run : node make-it-modular.js ./folder txt


// main solution


//const filterFn = require('./solution_filter.js')
//const dir = process.argv[2]
//const filterStr = process.argv[3]

//filterFn(dir, filterStr, function (err, list) {
//  if (err) {
//    return console.error('There was an error:', err)
//  }

//  list.forEach(function (file) {
//    console.log(file)
//  })
//})