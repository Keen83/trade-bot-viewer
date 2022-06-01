import thunkMiddleware from "redux-thunk"
import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "../components/Auth/GoogleSignin/authRedusers";


let reducer = combineReducers({
    auth: authReducer
})



let store = configureStore({
    reducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});
export default store