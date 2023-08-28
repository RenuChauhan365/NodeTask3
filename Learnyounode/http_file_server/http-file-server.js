const http = require('http');
const fs = require('fs');

// Get the port and file location from command line arguments
const port = process.argv[2];
const fileLocation = process.argv[3];

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Create a read stream for the file
  const fileStream = fs.createReadStream(fileLocation);

  // Set the appropriate headers for the response
  res.setHeader('Content-Type', 'text/plain');

  // Pipe the file stream into the response stream
  fileStream.pipe(res);
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`${port}`);
});



// main solution


/*
   const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))*/
