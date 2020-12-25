import React,{useState}  from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions/todoAction";
import { setEdit } from "../redux/actions/todoAction";
import { editTodo } from "../redux/actions/todoAction";

function Todo(props) {
    const [value,setValue] = useState(props.todo.text);
    const dispatch = useDispatch();
    const handleSubmit = e =>{
        e.preventDefault();
        if (!value) return;
        dispatch(editTodo(props.index,value));
        setValue(value);
    };
    var todoEle;
    var button;
    if(props.todo.editable){
        todoEle =<div className="text">
        <form onSubmit={handleSubmit}>
            <input type="text" value={value}onChange ={e=>setValue(e.target.value)}/>
        </form>
        </div>;
        button=<div className="btn" onClick={handleSubmit}>Done</div>
    }
    else{
        todoEle =<div className="text">
        {props.todo.text}
        </div>
        button=<div className="btn" onClick={()=>dispatch(setEdit(props.index))}>Edit</div>;
    }
    return (
        <div className="todo" key={props.index} index={props.index}>           
            {todoEle}
            <div className="btn-con">
                {button}
                <div className="btn" onClick={()=>dispatch(deleteTodo(props.index))}>
                    X
                </div>
            </div>
        </div>
    )
}

export default Todo;
