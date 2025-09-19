import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos:['get milk', 'walk dog', 'do laundry', 'learn redux toolkit', 'build awesome app', 'deploy to netlify'],
}

export const todolistSlice = createSlice({
    name: "todolistSlice",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            state.todos.push(action.payload);
        }
    }
})
export const {addTodo} = todolistSlice.actions;
export default todolistSlice.reducer;