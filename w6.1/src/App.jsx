import { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
// import { title } from 'process'; 

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="i am chieffffffffffffffffffffff" />
//     </div>
//   )
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState('my name is .....');

//   function updateTitle() {
//     setTitle('my name is ' + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update Title</button>
//       <br />
//       <br />
//       <Header title={title} />
//     </div>
//   )
// }

// function Header({title}) {
//   return (
//     <div>{title}</div>
//   )
// }
// // memo is used to prevent re-rendering of the component if the props are the same
// // const Header = React.memo(function Header({title}) {
// //   return (
// //     <div>{title}</div>
// //   )
// // })
// function App() {
//     useEffect(()=>{
//         fetch("https//sum-server.100xdevs/todos").then(
//             async ( res)=>{
//                 const json = await res.json();
//                 console(json);
//             }
//         )
//     },[])
//     return(<div>
//         <CardWrapper>
//             <div style={{display : "flex"}
//             }>hi theraa</div> 
//             </CardWrapper>
//         </div>
//     )
// }


// function CardWrapper({children}){
//     return    <div style={{border: "2px solid black", padding:"7px", margin: "15px"} }>
//             {children}
//         </div>
    
// }

function App(){
    const [todos, setTodo] = useState([]);

    useEffect(function(){
        fetch("http://localhost:3000/todos").then(
            async (res)=>{
                const json = await res.json();
                setTodo(json);
            }
        )
    },[])
    
    return( <div>
        {/* {todos.length} */}
        {todos.map(todo => <Todo key = {todo.id} title={todo.title} discription={todo.discription} />)}
       </div>
    )
}
// eslint-disable-next-line react/prop-types
function Todo({ title , discription}){
    return (
        <div>
        <h3>
            {title}
        </h3>
        <p>
            {discription}
        </p>
        </div>
    );
}


export default App;