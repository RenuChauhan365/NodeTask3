const express = require('express');
const path = require('path');

// Create an Express app instance
const app = express();

// Define the static file directory based on command-line arguments or default to 'public'
const staticDirectory = process.argv[3] || path.join(__dirname, 'public');
app.use(express.static(staticDirectory));

// Define the port based on command-line arguments or default to 3000
const port = process.argv[2] || 3000;

// Start the server and log a message upon successful startup
app.listen(port, () => {
  console.log(`${port}`);
});

//_____________Main Solution___________________________________________________________


//const path = require('path')
//const express = require('express')
//const app = express()

//app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

//app.listen(process.argv[2])