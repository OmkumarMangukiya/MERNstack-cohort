import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

 
  return (
    <div>
      <CustomButton count={count} setCount={setCount}> </CustomButton>
    </div>
  )
}
function CustomButton(prop){
  const count = prop.count;

  function updateCounter() {
    prop.setCount(count + 1);
  }
  return <button onClick={updateCounter}> 
    Counter {prop.count}
  </button>
}
export default App
