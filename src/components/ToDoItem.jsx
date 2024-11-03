import React,{useState} from 'react'
import { useTodo } from '../context/todocontext';

const ToDoItem = ({todo}) => {
  const [isEditible, setisEditible] = useState(false)
  const [todomsg, settodomsg] = useState(todo.todo)
  const {updateTodo,deleteTodo,toggleComplete}=useTodo();
  const edittodo=()=>{
    updateTodo(todo.id,todomsg);
    setisEditible(false);
  }
  const toggleCompleted=()=>{
    toggleComplete(todo.id);
  }
  return (
  <div className="todo-item" style={{ backgroundColor: todo.completed ? '#c6e9a7' : '#ccbed7' }}>
    <input type="checkbox" className="checkbox" checked={todo.completed} onChange={toggleCompleted} />
    <input type="text" className="todo-text" style={{ border: isEditible ? '2px solid black' : 'transparent', textDecoration: todo.completed ? 'line-through' : 'none'  }} value={todomsg} readOnly={!isEditible} onChange={(e)=>settodomsg(e.target.value)} />
    <button className="edit-save-button" disabled={todo.completed} onClick={()=>{
      if(isEditible)
      {
        edittodo();
      }
      else
      {
        setisEditible((prev)=>!prev);
      }
    }}>{isEditible?"📁":"✏️"}</button>
    <button className="delete-button" onClick={()=>deleteTodo(todo.id)}>❌</button>
  </div>
  )
}

export default ToDoItem