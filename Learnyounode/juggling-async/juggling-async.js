/*
Create a file named juggling-async.js.

This problem is the same as the previous problem (HTTP COLLECT) in that
you need to use http.get(). However, this time you will be provided with
three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs
and print it to the console (stdout). You don't need to print out the
length, just the data as a String; one line per URL. The catch is that you
must print them out in the same order as the URLs are provided to you as
command-line arguments.

*/



const http = require('http');

// Get the URLs from command-line arguments
const urls = process.argv.slice(2);

// Keep track of the responses and the number of completed requests
const responses = [];
let counter = 0;

// Function to fetch content from a URL
function fetchContent(url, index) {
  http.get(url, response => {
    let data = '';

    response.on('data', AllData => {
      data += AllData;
    });

    response.on('end', () => {
      responses[index] = data;
      counter++;

      // Check if all requests are completed

      if (counter === urls.length) {
        responses.forEach(response => {
          console.log(response);
        });
      }
    });
  }).on('error', error => {
    console.error(`${error.message}`);
  });
}

// Fetch content from each URL
urls.forEach((url, index) => {
  fetchContent(url, index);
});



/* ______________________________________Main Results --------------------------------
 const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response)
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }
		*/