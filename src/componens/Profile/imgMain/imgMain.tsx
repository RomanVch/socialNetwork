import React from 'react';
import avatarDefolt from "../../../img/defoltAvatar.png";
import style from './imgMain.module.css';
import {Preloader} from "../../common/preloader/Preloader";
  function ImgMain (props: any) {

    return(
      <div className={style.img_main}>

      <img width="100%" height="450px"  className={style.cococo} src="http://www.marjanna.pl/wp-content/uploads/2010/02/47668212-winter-picture.jpg"/>
      <img className="cococo__avatar cococo__avatar_margin" width="120px" height="120px" src={props.profile.photos.small?props.profile.photos.small:avatarDefolt}/>
      <div className={style.content_info}>

        <a href={"https://"+props.profile.contacts.facebook} className={style.content_profile_link}>facebook</a>
        <a href={"https://"+props.profile.contacts.vk} className={style.content_profile_link}>vk</a>

      <div className ={style.content__block_avtar}>
          <h2 className={style.content__h2}>{props.profile.fullName}</h2>
          <p className={style.content__paragraph}>{props.profile.aboutMe}</p>
          <p className={style.content__paragraph}>{props.profile.lookingForAJob?props.profile.lookingForAJobDescription:"Работаю"}</p>
      </div>

        <a href={"https://"+props.profile.contacts.instagram} className={style.content_profile_link}>instagram</a>
        <a href={"https://"+props.profile.contacts.github} className={style.content_profile_link}>github</a>

    </div>
    </div>
    )
 };

 export default ImgMain
