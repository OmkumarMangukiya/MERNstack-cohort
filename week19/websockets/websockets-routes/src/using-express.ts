import express from "express";
import WebSocket, { WebSocketServer } from "ws";
// Express server setup
const app = express();
const httpServer = app.listen(8080 , function(){
    console.log(new Date()  +` Server is running on http://localhost:8080`);
});
app.get("/", function (req, res) {
    res.send("Hello from express server");
});
const wss2 = new WebSocketServer({ server: httpServer });

wss2.on('connection', function connection(socket) {
    socket.on("error", console.error);
    socket.on('message', function (data) {
        wss2.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        });
    });

    socket.send("Hello from express server");
});

