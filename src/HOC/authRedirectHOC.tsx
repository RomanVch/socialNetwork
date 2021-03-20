import React, {ComponentType} from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mSTPT={
    isAuth:boolean
}

const mSTP=(state:AppStateType):mSTPT=>{
    return{
     isAuth: state.auth.isAuth
    }
}
export function withAuthRedirect <T>(Component: ComponentType<T>)  {
    const RedirectComponent = (props: mSTPT) => {

        let {isAuth,...restProps}= props
        if (!props.isAuth) {
            return <Redirect to={"/login"}/>
        } else {
        return <Component  {...restProps as T}/>
    }}

    const ConnectRedirectComponent=connect(mSTP)(RedirectComponent)
    return ConnectRedirectComponent
}