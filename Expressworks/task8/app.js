const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', function(req, res) {
  const filename = process.argv[3];
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return res.sendStatus(500);
    }
    try {
      const books = JSON.parse(data);
      res.json(books);
    } catch (e) {
      res.sendStatus(500);
    }
  });
});

app.listen(process.argv[2] || 3000, () => {
  console.log(`${process.argv[2] || 3000}`);
});





//__________________Main Answer______________________________________________


//const express = require('express')
//    const app = express()
//    const fs = require('fs')

//    app.get('/books', function(req, res){
//      const filename = process.argv[3]
//        if (e) return res.sendStatus(500)   ) {
//        try {
//          books = JSON.parse(data)
//        } catch (e) {
//          res.sendStatus(500)
//        }
//        res.json(books)
//      })
//    })

//    app.listen(process.argv[2])





















