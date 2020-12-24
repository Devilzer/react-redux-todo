const initialState = {
    todos :[]
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case "CREATE_TODO":
            const obj ={
                text : action.payload,
                isComplete :false
            };
            const newTodo = [...todos,obj];
            return{
                ...state,
                todos : newTodo
            };
        default:
            return state;
    }
};
