const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

// Route to serve index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
