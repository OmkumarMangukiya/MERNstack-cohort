"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)(null);
    const [message, setMessage] = (0, react_1.useState)("");
    const [sendMessage, setSendMessage] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const socket = new WebSocket(`ws://localhost:8080`);
        socket.onopen = () => {
            console.log('websocket connected');
            setSocket(socket);
        };
        socket.onmessage = (message) => {
            console.log(`Recieved message : ${message.data}`);
            setMessage(message.data);
        };
    }, []);
    if (!socket) {
        return <div> Loading...</div>;
    }
    return (<>
      <input type="text" value={sendMessage} onChange={(e) => setSendMessage(e.target.value)}/>
      <button onClick={() => {
            socket.send(sendMessage);
        }}>Send</button>
      <div>
      <h2>Messages</h2>
      <p>{message}</p>
      </div>
    </>);
}
exports.default = App;
