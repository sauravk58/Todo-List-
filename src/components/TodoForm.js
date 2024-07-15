import React from 'react'
import {useState} from "react"
const TodoForm = (props) => {
    const [text,setText]=useState("");
  return (
    <>
        <div className="todo-form">
            <h1>Add New Todo</h1>
            {/* {bcz of onChange we can change the value of input without this we cann't edit or write} */}
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Todo Task'></input>
            <button onClick={()=>props.add(text)}>Add Task</button>
        </div>
    </>
  )
}

export default TodoForm