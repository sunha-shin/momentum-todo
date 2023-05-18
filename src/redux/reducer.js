import {combineReducers} from 'redux'
import weatherSlice from "./slice/weatherSlice";
import userSlice from "./slice/userSlice";
import mainTodoSlice from "./slice/mainTodoSlice";
import todoListSlice from "./slice/todoListSlice";

const rootReducer = combineReducers({
    weatherData:weatherSlice.reducer,
    userData:userSlice.reducer,
    mainTodo:mainTodoSlice.reducer,
    todoList:todoListSlice.reducer
})

export default rootReducer