import React from 'react';

import axios from "axios";
import {connect} from "react-redux";
import Login from "./Login";
import {authReducerAC, AuthReducerACType} from "../../../redux/auth-reducer ";
import {AppStateType} from "../../../redux/redux-store";



class LoginContainers extends React.Component<any, any>{
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{
            withCredentials:true
        })
            .then(response=>{
                if (response.data.resultCode === 0){
                    debugger
                    this.props.authReducerAC(response.data.data)
                }
            })
    }

    render() {
        return(
            <Login{...this.props}/>
        )
    }
}
type MSTPtype= {}
type MDPtype={
    authReducerAC:(id:number,email:string,login:string)=>void
}
const mapStateToProps =(state: AppStateType)=>({
isAuth:state.auth.isAuth,
    login:state.auth.login
})
type propsConnectType=MSTPtype | MDPtype
export const LoginContainer =  connect<MSTPtype,MDPtype,{},AppStateType>(mapStateToProps,{authReducerAC}) (LoginContainers)
