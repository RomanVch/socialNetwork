import {Dispatch} from "react";
import {loginAPI, usersAPI} from "../apiTS/API";
import {setPage, setUsers} from "./user-reducer";
import {rejects} from "assert";


const SET_USER_DATA = "SETUSERDATA"

export type authStateType = {

    id: number,
    email: string,
    login: string
    isAuth: any
    serverError:any
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    serverError:""
}
type allActionType=AuthReducerACType|serverErrorACType

export const getAuthUserData=()=>{
    return (dispath:Dispatch<any>)=>{
     return    usersAPI.login()
            .then(response=>{

                if (response.resultCode === 0){

                    dispath(authReducerAC(response.data.id,response.data.email,response.data.login,true))
                }
            })
    }}

export const login=(email:string,pasword:string,rememberMe:boolean)=>{
    return (dispath:Dispatch<any>)=>{

        return    loginAPI.loginAuth(email, pasword, rememberMe)

            .then((response)=>{

                if (response.data.resultCode === 0){
                    dispath(getAuthUserData())
                } else {
                    debugger
                    dispath(serverErrorAC(response.data.messages[0]))
                }
            })
    }}
export const loginOut=()=>{
    return (dispath:Dispatch<any>)=>{
        return    loginAPI.loginOut()
            .then(response=>{
                if (response.data.resultCode === 0){
                    dispath(authReducerAC(null,null,null,false))
                }
            })
    }}
const authReducer = (state: any = initialState, action: any): authStateType => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state, id:action.id,
                email:action.email,
                login:action.login,
                isAuth: action.isAuth
            }
        case "SERVER_ERROR":{
                return {...state,serverError:action.serverError}
            }
        default:
            return state

    }
}


export type AuthReducerACType = (id: number|null, email: string|null, login: string|null, isAuth:boolean ) => ({ type: string, id: number|null, email: string|null, login: string|null, isAuth:boolean })
export const authReducerAC: AuthReducerACType = (id: number|null, email: string|null, login: string|null,isAuth:boolean) => ({
    type: SET_USER_DATA,
    id,email,login,isAuth
})
export const serverErrorAC = (serverError:string) => ({
    type: "SERVER_ERROR",
    serverError
} as const)
export type serverErrorACType = ReturnType<typeof serverErrorAC>;



export default authReducer;
