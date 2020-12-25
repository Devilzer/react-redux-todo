import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions/todoAction";
function Todolist() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <div className ="todolist">
            <div className="todo">
                <div className="text">
                    do something
                </div>
                <div className="btn-con">
                    <div className="btn">
                        Edit
                    </div>
                    <div className="btn">
                        X
                    </div>
                </div>
                
            </div>
            {
                state.todos.map((todo,index)=>(
                    <div className="todo" key={index} index={index}>
                        <div className="text">
                            {todo.text}
                        </div>
                        <div className="btn-con">
                            <div className="btn">
                                Edit
                            </div>
                            <div className="btn" onClick={()=>dispatch(deleteTodo(index))}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Todolist;
