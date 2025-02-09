import WebSocket, { WebSocketServer } from "ws";
import http from "http";

// HTTP server setup
const server = http.createServer((req, res) => {
    console.log(new Date() + " Recieved request for " + req.url);
    res.end("Hello ");
});

const wss = new WebSocketServer({ server });

wss.on("connection", function connection(socket) {
    socket.on("error", console.error);  // registered error event

    socket.on("message", function (data, isBinary) {  // registered message event
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data + " back here ", { binary: isBinary });
            }
        });
    });
    socket.send("Hello message from server"); // send message to client when connection is established
});

server.listen(8000, function () {
    console.log(new Date() + " Server is running on http://localhost:8000");
});

