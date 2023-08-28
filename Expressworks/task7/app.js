const express  = require('express') ;

const app = express();
const port = process.argv[2];

app.get('/search', async (req, res) => {
  try {
    res.send(req.query);
  } catch (error) {
    res.status(500).send(' Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//___________________Main Solution _____________________________________________


//const express = require('express');
//const app = express();

//const port = process.argv[2];

//app.get('/search', function(req, res) {
//  res.send(req.query);
//});

//app.listen(port)