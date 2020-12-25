import React from 'react';
import Todo from "./Todo";
import { useSelector } from "react-redux";
// import { deleteTodo } from "../redux/actions/todoAction";
function Todolist() {
    const state = useSelector(state=>state);
    return (
        <div className ="todolist">
            {
                state.todos.map((todo,index)=>(
                    <Todo
                        key={index}
                        todo ={todo}
                        index={index}
                    />
                ))
            }
        </div>
    )
}

export default Todolist;
