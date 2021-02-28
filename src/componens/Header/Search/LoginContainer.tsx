import React from 'react';

import axios from "axios";
import {connect} from "react-redux";
import Login from "./Login";
import {authReducerAC, AuthReducerACType, getAuthUserData} from "../../../redux/auth-reducer ";
import {AppStateType} from "../../../redux/redux-store";
import {usersAPI} from "../../../apiTS/API";



class LoginContainers extends React.Component<any, any>{
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        console.log(this.props)
        return(
            <Login{...this.props}/>

        )
    }
}
type MSTPtype= {}
type MDPtype={
    getAuthUserData:()=>void

}
const mapStateToProps =(state: AppStateType)=>({
isAuth:state.auth.isAuth,
    login:state.auth.login,
    id:state.auth.id,
    email:state.auth.email

})
type propsConnectType=MSTPtype | MDPtype
export const LoginContainer =  connect<MSTPtype,MDPtype,{},AppStateType>(mapStateToProps,
    {getAuthUserData}) (LoginContainers)
