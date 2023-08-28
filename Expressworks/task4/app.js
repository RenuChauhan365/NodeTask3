
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.argv[2] || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
  const reversedStr = req.body.str.split('').reverse().join('');
  res.send(reversedStr);
});

app.listen(port, () => {
  console.log(`${port}`);
});
