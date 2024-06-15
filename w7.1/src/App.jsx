// // import {BrowserRouter ,Routes,Route}  from "react-router-dom"
// // import {lazy} from "react";
// // const Dashboard = lazy(() => import("./components/Dashboard"))
// // const Landing =  lazy(() => import("./components/Landing"))
// // import {useNavigate} from "react-router-dom"
// // import { Suspense } from "react";
// function App() {

import { useState } from "react"


// return(
//   <>
//   <div style={{background :  "black" , color : "white"}}>
//     Common

//   </div>
//   <BrowserRouter>
//   <Appbar/>
//     <Routes>
//       <Route path="/" element={<Suspense fallback = {"loading..."}><Landing /> </Suspense>} />
//       <Route path="/dashboard" element={<Suspense fallback = {"loading..."}><Dashboard /> </Suspense>} />
//     </Routes>
//   </BrowserRouter>
//   </>
// ) 
// }

// function Appbar(){
//   const navigate = useNavigate();
//   return(
//     <div>
// <button onClick={()=>{

//       // window.location.href = "/"
//       navigate("/")
//     }}> Landing</button>
//     <button onClick={()=>{
//       // window.location.href = "/dashboard"
//       navigate("/dashboard")
//     }}> Dashboard</button>
//     </div>
//   )
// }

// export default App
//Prop Drilling
// context api
//https://react.dev/learn/passing-data-deeply-with-context
import { CountContext } from "./context"
import {  useContext } from "react"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value = {count}>
      <Count count={count} setCount={setCount} />
      </CountContext.Provider>      
    </div>
  )
}
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />

    </div>
  )
}
function CountRenderer(){
  const count = useContext(CountContext)
return <div>
  {count}
</div>
}

function Buttons({  setCount }) {
  const count = useContext(CountContext)
  return (<>
    <button onClick={() => {
      setCount(count + 1)
    }}> Increase</button>
    <button onClick={() => {
      setCount(count - 1)
    }}> Decrease</button>
  </>)
}
export default App