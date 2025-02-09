"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ws_1 = require("ws");
// Express server setup
var app = (0, express_1.default)();
var httpServer = app.listen(8080, function () {
    console.log(new Date() + " Server is running on http://localhost:8080");
});
app.get("/", function (req, res) {
    res.send("Hello from express server");
});
var wss2 = new ws_1.WebSocketServer({ server: httpServer });
wss2.on('connection', function connection(socket) {
    socket.on("error", console.error);
    socket.on('message', function (data) {
        wss2.clients.forEach(function each(client) {
            if (client.readyState === ws_1.default.OPEN) {
                client.send(data);
            }
        });
    });
    socket.send("Hello from express server");
});
