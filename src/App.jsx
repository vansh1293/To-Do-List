import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from './context/todocontext'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function App() {
  const [todos, settodos] = useState([]);
  const addTodo=(todoText)=>{
    settodos((prev)=> [{id:Date.now(),todo:todoText,completed:false},...prev] );
  }
  const updateTodo=(id,todoText)=>{
    settodos((prev)=> prev.map((prevtodo)=> (prevtodo.id===id)?{...prevtodo,todo:todoText}:prevtodo ))
  }
  const deleteTodo=((id)=>{
    settodos((prev)=> prev.filter((prevtodo)=>(prevtodo.id!==id)))
  })
  const toggleComplete = (id) => {
    settodos((prev) =>
        prev.map((prevtodo) =>
            (prevtodo.id === id) ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo
        )
    );
};

useEffect(() => {
  const todos=JSON.parse(localStorage.getItem("todos"));
  if(todos && todos.length>0)
  {
    settodos(todos);
  }
}, [])
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="container">
        <div className="todo-input">
            <h1 className="title">To Do List</h1>
            <div className="form-container">
                <ToDoForm />
            </div>
            <div className="todo-list">
                {todos.map((todo) => (
                  <div key={todo.id} className="todo-item">
                    <ToDoItem todo={todo} />
                  </div>
                ))}
            </div>
        </div>
    </div>
      </TodoProvider>
  )
}

export default App
