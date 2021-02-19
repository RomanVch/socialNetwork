import React from 'react';
import style from './Login.module.css'
import search from './img/Search.svg';
import {NavLink} from "react-router-dom";

  function Login (props: any) {
    return(
        <div>{props.isAuth? props.login:
            <NavLink to={"/login"}>Войти</NavLink>}
        </div>
    )
 };

 export default Login
