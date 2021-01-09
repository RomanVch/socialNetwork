import React from 'react';
import style from './Search.module.css'
import search from './img/Search.svg';

  function Serch (props: any) {
    return(
        <form method="post" action="https://echo.htmlacademy.ru">
<input type="search" name="search" placeholder="Найди друга" className={style.Search__input} />
            <button type="submit" className={style.search__button}>
            <img src={search} alt="логотип" width="30px"/>
            </button>
            </form>
    )
 };

 export default Serch