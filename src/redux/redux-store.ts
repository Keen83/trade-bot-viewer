import thunkMiddleware from "redux-thunk"
import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'


let reducer = combineReducers({
    
})



let store = configureStore({
    reducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});
export default store