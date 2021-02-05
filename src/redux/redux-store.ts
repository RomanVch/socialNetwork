import {combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer ";
import userReducer from "./user-reducer";

let reducers = combineReducers({
    post: profileReducer,
    friendMessage: dialogReducer,
    usersPage: userReducer
});
export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers);
