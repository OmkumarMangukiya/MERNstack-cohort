/* eslint-disable react/prop-types */
import { useState } from 'react';
// import axios from "axios";
import { useMemo } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);
//    useasyncEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
//       setTodos(response.data);
//     });
//   }, []);

//   return (
//     <>{todos.map(todo => 
//       <Todo key={todo.id} title={todo.title} description={todo.description}/>
//     )
//     }
//     </>
//   );
// }
//   function Todo({ title, description }) {
//     return (<div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>)

//   }



// function App(){
//   const [id, setId] = useState(1);


//     return(
//       <>
//       <button onClick={() => setId(1)}> 1 </button>
//       <button onClick={() => setId(2)}> 2 </button>
//         <Todo id = {id}></Todo>
//       </>
//     )
// }

// function Todo({id}){
//   const [todo,setTodo] = useState([])
//   useEffect(()=>{
//     axios.get('https://sum-server.100xdevs.com/todo?id=' + id).then(response=>{
//       setTodo(response.data.todo);
//     });
//   },[id]); 
//   return(
//     <div>
//       <h3>{todo.title}</h3>
//       <p>{todo.description}</p>
//     </div>
//   )
// }
function App() {
  let [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  function Counter() {
    setCount(count + 1)
  }
  
    let sum = useMemo(()=>{
      let counts = 0 ;
    for (let i = 1; i <= num; i++) {
      counts += i;
    }
    return counts;}
    ,[num])

  return (
    <div>
      <input type="number" value={num} onChange={(e) => {
        setNum(e.target.value);
        console.log(e);
      }}></input>

      <h1>Sum is {(sum)}</h1>
      <button onClick={Counter}>Count {count}</button>
    </div>
  )
}
export default App
