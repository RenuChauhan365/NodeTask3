const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node countLines.js <filename>');
  process.exit(1);
}
const filename = process.argv[2];
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error while reading file: ${err}`);
    process.exit(1);
  }

  const lines = data.split('\n').length - 1;
  console.log(lines);
});



// ________________________________________________________________________
//    2nd method
// ________________________________________________________________________

const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
	if (err) {
		return console.log(err)
	}
	// fs.readFile(file, 'utf8', callback) can also be used
	const lines = contents.toString().split('\n').length - 1
	console.log(lines)
})