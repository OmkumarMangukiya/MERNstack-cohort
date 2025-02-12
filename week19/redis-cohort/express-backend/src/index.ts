import { createClient } from "redis";
import client from 'pg';
import express from 'express';
const redisClient = createClient();
const pgClient = new client.Client({
    user : 'postgres',
    host : 'localhost',
    database : 'postgres',
    password : 'omman1513',
    port : 5432
})

const app = express();
app.use(express.json());

app.post('/adduser', async (req, res) => {
    const { id, name, age } = req.body;
    try {
        const response = await pgClient.query('INSERT INTO users (id, name, age) VALUES ($1, $2, $3)', [id, name, age]);
        const user = { id, name, age };
        await redisClient.lPush('users', JSON.stringify(user));
        res.send(response);
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
});

app.post('/getuser', async (req, res) => {
    try {
        const cachedUsers = await redisClient.lRange('users', 0, -1);
        if (cachedUsers.length > 0) {
            const users = cachedUsers.map(user => JSON.parse(user));
            res.send(users);
        } else {
            const response = await pgClient.query('SELECT * FROM users');
            const users = response.rows;
            for (const user of users) {
                await redisClient.lPush('users', JSON.stringify(user));
            }
            res.send(users);
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
});

async function Connection() {
    await pgClient.connect();
    await redisClient.connect();
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}
Connection();