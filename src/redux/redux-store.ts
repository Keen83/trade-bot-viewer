import thunkMiddleware from "redux-thunk"
import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "../components/Auth/GoogleSignin/authReducers";
import { instrumentsReduser } from "../data/instrumentsReduser";


let reducer = combineReducers({
    auth: authReducer,
    instruments: instrumentsReduser
})



let store = configureStore({
    reducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});
export default store