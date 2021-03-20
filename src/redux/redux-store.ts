import {combineReducers, createStore,applyMiddleware} from "redux"
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer ";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer ";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    post: profileReducer,
    friendMessage: dialogReducer,
    usersPage: userReducer,
    auth:authReducer
});
export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store.getState()
