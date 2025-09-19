import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './todolistSlice';

function Todolist() {
    var {todos} = useSelector(state => state.todoR);
    var dispatch = useDispatch();
    let [ntd, setNtd] = useState("");
    return (
        <div className="border border-2 border-warning m-2 p-2">
            <h1>Todolist</h1>
            <input type="text" onChange={(e) => {setNtd(e.target.value)}} />
            <button onClick={() => dispatch(addTodo(ntd))}>Add Todo</button>
            <ul>
                <li>
                    {
                        todos.map((t) => <li>{t}</li>)
                    }
                </li>
            </ul>
        </div>
    )
}

export default Todolist;