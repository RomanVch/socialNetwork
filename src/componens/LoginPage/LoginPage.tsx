import React from 'react';
import s from "./LoginPage.module.css"

import style from './LoginPage.module.css';
import { LoginForm} from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import {authStateType} from "../../redux/auth-reducer ";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router";


const LoginPage = (props: any) => {
const auth=useSelector<AppStateType,authStateType>(state=>state.auth.isAuth)
console.log(auth)

    if(!auth){
    return (
        <div><h1>
            login
        </h1>
            <LoginForm/>
        </div>

    )}else {
        return (
<Redirect to={"/profile"}/>
        )
    }
};

export default LoginPage
