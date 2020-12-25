const initialState = {
    todos :[]
};

const reducer = (state = initialState, action)=>{
    
    switch (action.type) {
        case "CREATE_TODO":
            const obj ={
                text : action.payload,
                isComplete :false,
                editable : false
            };
            return{
                ...state,
                todos :[obj,...state.todos]
            };
        case "DELETE_TODO":
            const newTodos =state.todos;
            newTodos.splice(action.payload,1);
            return{
                ...state,
                todos:newTodos
            };
        case "SET_EDIT":
            const updateTodos =state.todos;
            updateTodos[action.payload].editable = true;
            return{
                ...state,
                todos:updateTodos
            };
        case "EDIT_TODO":
            const tempTodo = state.todos;
            tempTodo[action.payload.index].text = action.payload.text;
            tempTodo[action.payload.index].editable = false;
            return{
                ...state,
                todos:tempTodo
            };

        default:
            return state;
    }
};
export default reducer;