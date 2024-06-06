
const express = require('express');
const cors = require('cors');
     const app = express();
     const port = 5000;

     app.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000'); // Allow requests from your frontend
       res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
       res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
       next();
     });
function sum(a,b){
    return a+b;
}
     app.get('/',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sum(a,b);
    res.send(ans.toString());
})
     app.listen(port, () => {
       console.log(`Server listening on port ${port}`);
     });