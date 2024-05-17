const express = require('express');
const zod = require('zod');
const app = express();
const schema = zod.array(zod.number());


app.get('/', function(req, res){
    const kidneys = req.headers.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        // res.status(400).json({message: "Invalid input"});
        res.status(200).send(response);
    } else {
        res.status(200).send(response);
    }
});


app.listen(3000);