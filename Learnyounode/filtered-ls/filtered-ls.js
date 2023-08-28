// cmd --->  node filtered-ls.js  folder txt

const fs = require('fs');
const path = require('path');

// Get directory and extension from command line arguments
const directory = process.argv[2];
const extension = process.argv[3];

// Check if both arguments are provided
if (!directory || !extension) {
  console.log('Error: Try Again ');
  process.exit(1);
}

// Read the directory asynchronously
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    process.exit(1);
  }

  // Filter files by extension
  const filteredFiles = files.filter(file => path.extname(file) === `.${extension}`);


  // Print the filtered files
  filteredFiles.forEach(file => {
    console.log(file);
  });
});




// __________________________________________________


//const fs = require('fs')
//const path = require('path')

//const folder = process.argv[2]
//const ext = '.' + process.argv[3]

//fs.readdir(folder, function (err, files) {
//  if (err) return console.error(err)
//  files.forEach(function (file) {
//    if (path.extname(file) === ext) {
//      console.log(file)
//    }
//  })
//})
