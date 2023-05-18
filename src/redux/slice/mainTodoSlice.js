import {createSlice} from "@reduxjs/toolkit";

const initialState = {mainTodo:''}

const mainTodoSlice = createSlice({
    name: 'mainTodo',
    initialState,
    reducers: {
        saveMainTodo:(state, action) => {
            const { mainTodo } = action.payload;
            state.mainTodo = mainTodo;
        }
    },
});

export const { saveMainTodo } = mainTodoSlice.actions;

export default mainTodoSlice;
