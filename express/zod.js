const express = require('express');
const zod = require('zod');
const app = express();

// Correct the schema
const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal('US').or(zod.literal('IN')),
    kidneys: zod.array(zod.number())
});

app.get('/', function(req, res) {
    console.log('Headers data:', req.headers.data);

    let data;
    try {
        data = JSON.parse(req.headers.data);
        console.log('Parsed data:', data);
    } catch (error) {
        console.error('JSON parsing error:', error);
        return res.status(400).json({ message: "Invalid JSON format" });
    }

    const response = schema.safeParse(data);
    console.log('Validation response:', response);

    if (!response.success) {
        return res.status(400).json({ message: "Invalid input", errors: response.error.errors });
    } else {
        return res.status(200).json(response.data);
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
