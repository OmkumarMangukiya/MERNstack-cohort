const express = require('express');
const app = express();

function userMiddleware(req, res, next) {
    const { userID, password } = req.headers;
    
    if (!(userID == "admin" || password == "pass")) {
        res.status(401).json({ message: "Unauthorized" });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidney  = req.headers.kidney;
    
    if (!(kidney === 1 || kidney === 2)) {
        res.status(401).json({ message: "How are u alive." });
    } else {
        next();
    }
}

app.get('/', userMiddleware, kidneyMiddleware, (req, res) => {
    res.status(200).json({ message: "You are alive" });
});

// if server goes down
//global catches 
app.use(function(err, req, res, next) {
    res.json({
        msg: "something happen what u did?"
    })
})

app.listen(3000);