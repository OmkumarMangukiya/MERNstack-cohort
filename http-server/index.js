const express = require('express');
// const bodyParser = require('body-parser');
const port = 3000;

const app = express();

// Middleware to parse JSON bodies
// app.use(bodyParser.json());

// Serve static files (assuming index.html is in the root directory)
// app.use(express.static('.'));

function sum(n){
    let a = 0;
    for(let i = 1; i <= n; i++){
        a += i;
    }
    return a;
}
// Route to serve index.html
app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/index.html');
    const n = req.query.n;
    const ans = sum(n);
    res.send(ans.toString());
});

// Start the server
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
//npm install express body-parser
// npm install nodemon --save-dev
