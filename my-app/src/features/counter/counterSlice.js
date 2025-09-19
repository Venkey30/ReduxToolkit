import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    count:0
};

export var counterSlice = createSlice({
    name: 'counterS',
    initialState,
    reducers:{
        increment:(state)=>{state.count++;},
        decrement:(state)=>{state.count--;},
        reset:(state)=>{state.initialState.count;}
    }
})
export const {increment, decrement, reset} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;