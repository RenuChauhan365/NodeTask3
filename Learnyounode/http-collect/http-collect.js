/* PROBLEM:


   Create a file named http-collect.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/

const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  let data = '';

  response.on('data', (AllData) => {
    data += AllData;
  });

  response.on('end', () => {
    console.log(data.length);
    console.log(data);
  });

}).on('error', (error) => {
  console.error('Error:', error);
});


// _____GIven Solution _______________________-________

//'use strict'
//const http = require('http')
//const bl = require('bl')

//http.get(process.argv[2], function (response) {
//	response.pipe(bl(function (err, data) {
//		if (err) {
//			return console.error(err)
//		}
//		data = data.toString()
//		console.log(data.length)
//		console.log(data)
//	}))
//})