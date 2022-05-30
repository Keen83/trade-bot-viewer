import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk"
const { createStore, combineReducers, applyMiddleware } = require("redux")

let reducers = combineReducers({
    
})

// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export default store