export const createTodo = (text) =>{
    return {
        type : "CREATE_TODO",
        payload : text
    };
};

export const editTodo = (index,text) => {
    return {
        type : "EDIT_TODO",
        payload : {
            index : index,
            text : text
        }
    };
};

export const deleteTodo = (index) => {
    return {
        type : "DELETE_TODO",
        payload : index
    };
};
export const setEdit = (index)=>{
    return {
        type : "SET_EDIT",
        payload : index
    };
};