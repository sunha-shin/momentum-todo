import {CATEGORY_CONST} from "../../constants";
import {createSlice} from "@reduxjs/toolkit";

const {INBOX, DONE, TODAY} = CATEGORY_CONST;

const initialState = {
    category: {
        [INBOX]: [],
        [DONE]: [],
        [TODAY]: []
    },
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        saveTodoList:(state, action) => {
            const { category } = action.payload;
            state.category = category;
        }
    },
});

export const { saveTodoList } = todoListSlice.actions;

export default todoListSlice;
