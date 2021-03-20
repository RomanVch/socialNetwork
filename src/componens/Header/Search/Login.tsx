import React from 'react';
import style from './Login.module.css'
import search from './img/Search.svg';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginOut} from "../../../redux/auth-reducer ";

  function Login (props: any) {
     const dispatch=useDispatch()
      const onClickExit= ()=>{
          dispatch(loginOut())
      }
    return(
        <div>{props.isAuth?<div> <p>{props.login}</p><button onClick={()=>onClickExit()}>exit</button></div>:
            <NavLink to={"/login"}>Войти</NavLink>

        }
        </div>
    )
 };

 export default Login
