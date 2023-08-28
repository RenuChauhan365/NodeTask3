const http = require('http');
const url = process.argv[2];

if (process.argv.length < 3) {
  console.error('Error: Invalid URl');
  process.exit(1);
}

//  HTTP GET request
http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data);
  });

});

// node http-client.js http://jsonplaceholder.typicode.com/users