// import {CreateTodo} from './components/CreateTodo'
// import './App.css'
// import { Todos } from './components/Todos'
// import { useState } from 'react'

// function App() {
// const [todos,setTodos] = useState([]);
// // it goes to infinite loop
// fetch("http://localhost:3000/todos")
// .then(async function(res) {
//   const json =await res.json();
//   setTodos(json.todos)
// })
//   return (
//     <div> 
//       <CreateTodo/>
//       <Todos todos={todo}/>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import {CreateTodo} from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
const [todos,setTodos] = useState([])
  return (
    <div> 
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App

