import {TaskType, Test} from "./store";
import {Dispatch} from "react";
import {profileAPI, usersAPI} from "../apiTS/API";

export const ADDPOST = "ADD-POST",
    UPPOSTSTATE = "UP-POST-STATE",
    ADDLIKE = "ADD-LIKE",
    SET_USER_PROFILE="SET_USER_PROFILE",
    SET_STATUS="SET_STATUS",
    UPDATE_STATUS="UPDATE_STATUS"

let initialState = {
    textPost: "",
    status:"",
    postes: [
        {
            id: 3,
            name: "Абдула",
            like: 55,
            avatar: "https://avatars.mds.yandex.net/get-zen_doc/170671/pub_5bd6ee36ebe8af00aad622b0_5bd6f96613f8c600a99a3c72/scale_1200",
            message: "Привет"
        },
        {
            id: 2,
            name: "Вася",
            like: 35,
            avatar: "https://avatars.mds.yandex.net/get-zen_doc/3001030/pub_5ed23688706f83164ac7a267_5ed2375f82bed14b19ec5188/scale_1200",
            message: "Привет"
        },
        {
            id: 1,
            name: "Иван",
            like: 25,
            avatar: "https://ru.sm.news/wp-content/uploads/2019/12/05/unnamed-1.jpg",
            message: "Привет"
        }
    ],
    profile:[] as Test
}

const profileReducer = (state: TaskType = initialState, action: any): TaskType => {
    switch (action.type) {
        case ADDPOST: {
            const posting = {
                id: state.postes[0].id + 1,
                name: "Константин",
                like: 0,
                avatar: "https://www.blexar.com/avatar.png",
                message: state.textPost,
            }
            let newState = {...state,postes:[posting,...state.postes]}
            newState.textPost = "";
            return newState;
        }
        case UPPOSTSTATE: {
            return {...state,textPost:action.stringAddingPost};
        }
        case ADDLIKE:
            action.like === action.propsLike ? action.setLike(action.like + 1) : action.setLike(action.like - 1)
            return state
        case SET_USER_PROFILE:
             return {...state,profile:action.profile}
        case SET_STATUS:
            debugger
            return {...state,status:action.status}
        case UPDATE_STATUS:
            return {...state,status:action.status}
        default:
            return state

    }
}

export const profileThunk=(userId:number)=>{
    return (dispath:Dispatch<any>)=>{
        usersAPI.loadProfile(userId)
            .then(response => {
                dispath(setUserProfileAC(response.data))
            })

    }}
export const getProfileStatusThunk=(userId:number)=>{
    return (dispath:Dispatch<any>)=>{
        profileAPI.getStatus(userId)
            .then(response => {
                debugger
                dispath(getProfileStatusAC(response.data))
            })

    }}
export const updateProfileStatusThunk=(status:string)=>{
    return (dispath:Dispatch<any>)=>{
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0){
                dispath(getProfileStatusAC(status))}
            })

    }}
    export const setUserProfileAC=(profile:any)=>({type:SET_USER_PROFILE,profile})
export const getProfileStatusAC=(status:any)=>{
   debugger
    return {type:SET_STATUS,status}
}
export default profileReducer
