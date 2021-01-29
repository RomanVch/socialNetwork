import {combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer ";

    let reducers = combineReducers({
    post:profileReducer,
    friendMessage:dialogReducer
});
export type AppStateType = ReturnType<typeof reducers>
export let store = createStore(reducers);
