//console.log(process.argv);

//console.log(process.argv[2]);  // 2 consider from  0th index
// so we get output according to that


const args = process.argv.slice(2);
const sum = args.reduce((acc, num) => acc + parseFloat(num), 0);
console.log(sum);
