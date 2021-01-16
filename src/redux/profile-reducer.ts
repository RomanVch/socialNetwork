import {TaskType} from "./state";

export const ADDPOST = "ADD-POST",
    UPPOSTSTATE = "UP-POST-STATE",
    ADDLIKE = "ADD-LIKE"

const profileReducer = (state: TaskType, action: any):any => {
    if (action.type === ADDPOST) {
        const posting = {
            id: state.post[0].id + 1,
            name: "Константин",
            like: 0,
            avatar: "https://www.blexar.com/avatar.png",
            message: action.message,
        }
        state.post.unshift(posting)
        state.text.textPost = ""
        console.log(state.post)
        return state
    } else if (action.type === UPPOSTSTATE) {
        debugger
        state.text.textPost = action.stringAddingPost
        console.log(state.text.textPost)
        return state
    } else if (action.type === ADDLIKE) {
        if (action.like === action.propsLike) {
            action.setLike(action.like + 1)
        } else {
            action.setLike(action.like - 1)

        }
    } else return state
}
export default profileReducer
