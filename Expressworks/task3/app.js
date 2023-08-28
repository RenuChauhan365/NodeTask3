const express = require('express');
const app = express();


// Set the view engine to use Pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); // Specify the directory for views


// Define a route for the home page
app.get('/home', (req, res) => {
    const currentDate = new Date().toDateString();
    res.render({ currentDate }); // Render the 'home' view with the currentDate variable
});


// Start the server
const PORT = 8080; // You can change this to any port you prefer
app.listen(PORT, () => {
    console.log(`${PORT}`);
});
