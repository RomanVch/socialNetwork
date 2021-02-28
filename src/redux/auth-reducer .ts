import {Dispatch} from "react";
import {usersAPI} from "../apiTS/API";
import {setPage, setUsers} from "./user-reducer";


const SET_USER_DATA = "SETUSERDATA"

type authStateType = {

    id: number,
    email: string,
    login: string
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const getAuthUserData=()=>{
    return (dispath:Dispatch<any>)=>{
     return    usersAPI.login()
            .then(response=>{
                debugger
                if (response.resultCode === 0){

                    dispath(authReducerAC(response.data.id,response.data.email,response.data.login))
                }
            })
    }}



const authReducer = (state: any = initialState, action: any): authStateType => {

    switch (action.type) {
        case SET_USER_DATA:
debugger
            return {
                ...state, id:action.id,
                email:action.email,
                login:action.login,
                isAuth: true
            }
        default:
            return state

    }
}
type AuthReducerType={id: number, email: string, login: string}
export type AuthReducerACType = (id: number, email: string, login: string) => ({ type: string, id: number, email: string, login: string })
export const authReducerAC: AuthReducerACType = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    id,email,login
})




export default authReducer;
