const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', AllData => {
      body += AllData.toString().toUpperCase();
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(body);
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const port = process.argv[2] || 3000;
server.listen(port, () => {
  console.log(`${port}`);
});


/*
   const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))

		*/
