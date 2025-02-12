"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const pg_1 = __importDefault(require("pg"));
const express_1 = __importDefault(require("express"));
const redisClient = (0, redis_1.createClient)();
const pgClient = new pg_1.default.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'omman1513',
    port: 5432
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/adduser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, age } = req.body;
    try {
        const response = yield pgClient.query('INSERT INTO users (id, name, age) VALUES ($1, $2, $3)', [id, name, age]);
        const user = { id, name, age };
        yield redisClient.lPush('users', JSON.stringify(user));
        res.send(response);
    }
    catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}));
app.post('/getuser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cachedUsers = yield redisClient.lRange('users', 0, -1);
        if (cachedUsers.length > 0) {
            const users = cachedUsers.map(user => JSON.parse(user));
            res.send(users);
        }
        else {
            const response = yield pgClient.query('SELECT * FROM users');
            const users = response.rows;
            for (const user of users) {
                yield redisClient.lPush('users', JSON.stringify(user));
            }
            res.send(users);
        }
    }
    catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}));
function Connection() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        yield redisClient.connect();
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    });
}
Connection();
