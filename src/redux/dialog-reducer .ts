import {TaskType} from "./state";

 export const ADDMESSAGE = "ADD-MESSAGE",
    UPMESSAGESTATE = "UP-MESSAGE-STATE"

const dialogReducer = (state:TaskType,action:any): any =>{
    if (action.type === ADDMESSAGE) {
        const message = {
            you: state.text.textMessage,
            data: action.time
        }
        state.PropsFriendMessage[action.id].push(message)
        state.text.textMessage = ""
        return state
    } else if (action.type === UPMESSAGESTATE) {
        state.text.textMessage = action.addingPost
        return state
    } else return state
}

export default dialogReducer;
