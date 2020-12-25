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
        default:
            return state;
    }
};
export default reducer;