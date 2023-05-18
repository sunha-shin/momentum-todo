import {createSlice} from "@reduxjs/toolkit";
import {USER_INFO} from "../../constants";

const {NAME, EMAIL, PW} = USER_INFO;
const initialState = {[NAME]: '', [EMAIL]: '', [PW]: ''}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUserInfo:(state, action) => {
            const { name, email, pw } = action.payload;
            state.name = name;
            state.email = email;
            state.pw = pw;
        }
    },
});

export const { saveUserInfo } = userSlice.actions;

export default userSlice;
