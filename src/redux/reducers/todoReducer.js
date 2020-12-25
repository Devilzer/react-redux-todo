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
                todos :[...state.todos,obj]
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
        case "COMPLETE_TODO":
            const completeTodo =state.todos;
            if(completeTodo[action.payload].isComplete){
                completeTodo[action.payload].isComplete = false;   
            }
            else{
                completeTodo[action.payload].isComplete = true;
            }
            return{
                ...state,
                todos:completeTodo
            };
        default:
            return state;
    }
};
export default reducer;