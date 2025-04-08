import React, { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext';

function TodoForm() {
    const[todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()

        if(!todo) return;

        addTodo({todo,completed:false})
        setTodo("")
        document.getElementById('myForm').reset()
        
    }

     
    return (
        <form onSubmit={add} className="flex" id='myForm'>
            <input
                type="text"
                placeholder="Write Todo..."
                onChange={(e) => (setTodo(e.target.value))}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" id="myInput" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

