import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import IconsHeader from './IconsHeader/IconsHeader'
import style from './Header.module.css';

  function Header (props: any) {
    return(
        <header className={style.header}>
           
           <Logo/>
           <Search/>
           <IconsHeader/>
            </header>
    )
 };

 export default Header