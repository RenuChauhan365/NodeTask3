const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const isoTime = parsedUrl.query.iso;

  if (pathName === '/api/parsetime') {
    const date = new Date(isoTime);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else if (pathName === '/api/unixtime') {
    const unixTime = new Date(isoTime).getTime();

    const response = {
      unixtime: unixTime
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = process.argv[2] || 3000; // Default port is 3000 if no argument is provided

server.listen(port, () => {
  console.log(`${port}`);
});


/*

 'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }


      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/
