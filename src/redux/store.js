import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    authPage: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store;
export default store;