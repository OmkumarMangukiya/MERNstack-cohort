import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message,setMessage] = useState<string>("");
  const [sendMessage,setSendMessage] = useState("");
  useEffect(()=>{
    const socket = new WebSocket(`ws://localhost:8080`)
    socket.onopen =()=>{
      console.log('websocket connected');
      setSocket(socket);
    }
    socket.onmessage = async (message)=>{
      if (typeof message.data === 'string') {
        setMessage(message.data);
      } else if (message.data) {
        const text = await message.data;
        setMessage(text);
      } else {
        console.error('Unsupported message type:', message.data);
      }
    }
    return socket.close()
  },[])

  if(!socket){
    return <div> Loading...</div>
  }
  return (
    <>
      <input type="text" value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} />
      <button onClick={() => {
      
      socket.send(sendMessage);
      
      }}>Send</button>
      <div>
      <h2>Messages</h2>
      <p>{message}</p>
      </div>
    </>
  )
}

export default App
