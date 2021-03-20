import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Login';
import IconsHeader from './IconsHeader/IconsHeader'
import style from './Header.module.css';
import {LoginContainer} from "./Search/LoginContainer";

  function Header (props: any) {
    return(
        <header className={style.header}>

           <Logo/>
           <LoginContainer/>
           <IconsHeader/>
            </header>
    )
 };

 export default Header
