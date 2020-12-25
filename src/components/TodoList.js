import React from 'react';
import { useSelector } from "react-redux";
function Todolist() {
    const state = useSelector(state=>state);
    return (
        <div className ="todolist">
            <div className="todo">
                do something
            </div>
            {
                state.todos.map((todo,index)=>(
                    <div className="todo" key={index} index={index}>
                        {todo.text}
                    </div>
                ))
            }
        </div>
    )
}

export default Todolist;
