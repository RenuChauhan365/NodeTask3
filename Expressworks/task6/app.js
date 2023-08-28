const express = require('express');
const app = express();

const port = process.argv[2];

app.put('/message/:id', function(req, res) {
  const dateIdHash = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex');

  res.send(dateIdHash);
});

app.listen(port);


//______________Main Answer __________________________________________________


//const express = require('express')
//const app = express()

//app.put('/message/:id', function(req, res){
//	const id = req.params.id
//	const str = require('crypto')
//		.createHash('sha1')
//		.update(new Date().toDateString() + id)
//		.digest('hex')
//	res.send(str)
//})

//app.listen(process.argv[2])