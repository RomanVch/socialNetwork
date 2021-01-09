import React from 'react';

import style from './imgMain.module.css';
  function ImgMain (props: any) {
    return(
      <div className={style.img_main}>
          
      <img width="100%" height="450px"  className={style.cococo} src="http://www.marjanna.pl/wp-content/uploads/2010/02/47668212-winter-picture.jpg"/>
      <img className="cococo__avatar cococo__avatar_margin" width="120px" height="120px" src="https://www.blexar.com/avatar.png"/>
      <div className={style.content_info}>
     
        <a href="www.e1.ru" className={style.content_profile_link}>Лента</a>
        <a className={style.content_profile_link}>Профиль</a>
      
      <div className ={style.content__block_avtar}>
          <h2 className={style.content__h2}>Константин</h2>
          <p className={style.content__paragraph}>Всем привет</p>
          <p className={style.content__paragraph}>Мне 28 года</p>
      </div>
      
        <a className={style.content_profile_link}>Фото</a>
        <a className={style.content_profile_link}>Видео</a>
      
    </div>
    </div>
    )
 };

 export default ImgMain
