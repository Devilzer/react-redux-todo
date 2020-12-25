import React,{useState} from 'react';

function TodoForm() {
    const [value,setValue] = useState("");
    
    return (
        <div className="form" onSubmit>
            <form>
                <input type="text"  className="input" value={value} onChange ={e=>setValue(e.target.value)}/>
            </form>
        </div>
    )
}

export default TodoForm;
