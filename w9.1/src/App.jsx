// /* eslint-disable react/prop-types */
// //swr is a react hook library for data fetching
// import { useState, useEffect } from 'react'
// import './App.css'
// import axios from "axios"
// // function App() {

import { useState ,useEffect} from "react";

//   //   const [render,setRender] = useState(true)
//   //   useEffect(()=>{
//   //     setTimeout(()=>{
//   //       setRender(false)

//   //     },4000)
//   //   },[])
//   //   return <>
//   //     {render ? <Component/> : <div>compo 2</div>}
//   //     </>
//   // }
//   // function Component(){
//   // useEffect(()=>{
//   //   console.log('Component mounted')
//   //   return ()=>{
//   //     console.log('Component unmounted')
//   //   }
//   // },[])
//   // return <>
//   // <div>compo 1</div>
//   // </>


// //   const { todos, loading } = useTodos(5)
// //   if (loading) {
// //     return <div>Loading...</div>
// //   }
// //   return (
// //     todos.map(todo => <Todo key={todo.id} todo={todo} />)
// //   )

// // }

// // function useTodos(n) {
// //   const [todos, setTodos] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       axios.get("https://sum-server.100xdevs.com/todos")
// //         .then(res => {
// //           setTodos(res.data.todos)
// //           setLoading(false);
// //         })
// //     }, n * 1000);
// //     axios.get("https://sum-server.100xdevs.com/todos")
// //       .then(res => {
// //         setTodos(res.data.todos)
// //         setLoading(false);
// //       })
// //       //this return is usefull when n is changing as we have to clear the past interval
// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [n]);

// //   return { todos, loading };
// // }


// function Todo({ todo }) {
//   return <div>
//     <h2>{todo.title}</h2>
//     <p>{todo.description}</p>

//   </div>
// }

const useIsOnline = () => {
  const [ Online, setOnline] = useState(true);

  useEffect(()=>{
    window.addEventListener('online' ,()=>setOnline(true));
    window.addEventListener('offline' ,()=>setOnline(false));

  },[])
    
    
    return Online
  
  }
function App(){
  
  const isOnline = useIsOnline()
  if(isOnline){
    return <div>Online</div>
  }
  return <h2>You are Offline , CONNECT TO <b>INTERNET</b> </h2>
}

export default App

