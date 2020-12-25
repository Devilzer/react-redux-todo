import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/actions/todoAction";
function TodoForm() {
    const [value,setValue] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = e =>{
        e.preventDefault();
        if (!value) return;
        dispatch(createTodo(value));
        setValue("");
    };
    return (

        <div className="form" onSubmit={handleSubmit}>
            <form>
                <input type="text"  className="input" value={value} onChange ={e=>setValue(e.target.value)}/>
            </form>
        </div>
    );
};

export default TodoForm;
