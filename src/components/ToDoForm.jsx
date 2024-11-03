import React,{useState} from 'react'
import { useTodo } from '../context/todocontext';

const ToDoForm = () => {
    const [todoText, settodoText] = useState('');
    const {addTodo}=useTodo();
    const add=(e)=>{
        e.preventDefault();
        if(todoText.trim())
        {
            addTodo(todoText);
            settodoText('');
        }
    }
  return (
    <form id="todoForm" onSubmit={add}>
    <input
        type="text"
        id="todoInput"
        placeholder="Write Todo..." value={todoText} onChange={(e)=>settodoText(e.target.value)}
    />
    <button type="submit" id="addButton">
        Add
    </button>
</form>
  )
}

export default ToDoForm