import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    authPage: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__state__ = store;
export default store;