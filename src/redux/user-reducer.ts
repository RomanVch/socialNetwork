import {TaskType} from "./store";
import {get} from "https";
import axios from "axios";
const FOLLOW="FOLLOW",
    UNFOLLOW="UNFOLLOW",
    SET_USERS="SET_USERS"
type locationType = {
    city: string,
    country: string
}
export type usersType = {
    id: number,
    photoURL:string,
    fullName: string,
    status: string,
    location: locationType
    followed: boolean
}

export type inStateType = {
    users: usersType[]
}

type userACType = {
    type: "FOLLOW" | "UNFOLLOW" | "SET_USERS"
    id?: number
    users?:any
}


const initialState:inStateType =  {
    users: []
}


export const followAC = (ID: number) => ({type: FOLLOW, id: ID})
export const unFollowAC = (ID: number) => ({type: UNFOLLOW, id: ID})
export const setUsersAC = (users: usersType) => ({type: SET_USERS, users})

const userReducer = (state = initialState, action: userACType): inStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: !u.followed}
                        } else {return u}
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: false}
                        } else {return u}
                    }
                )
            }
            case SET_USERS:
            return {...state,users: [...state.users,...action.users]}
        default:
            return state
    }


}
export default userReducer
