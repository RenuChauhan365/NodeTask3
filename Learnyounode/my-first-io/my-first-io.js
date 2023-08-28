// use the fs module to work with file

// consider with error handling

const fs = require('fs');
if (process.argv.length < 3) {
  console.error('Error : try again');
  process.exit(1);
}
const filepath = process.argv[2];
try {
  const contents = fs.readFileSync(filepath, 'utf8');
  const newlineCount = contents.split('\n').length - 1;
  console.log(`${newlineCount}`);
} catch (err) {
  console.error(`Error reading ${filepath}: ${err.message}`);
}


//2nd solution

//const fs = require('fs')

//    const contents = fs.readFileSync(process.argv[2])
//    const lines = contents.toString().split('\n').length - 1
//    console.log(lines)


