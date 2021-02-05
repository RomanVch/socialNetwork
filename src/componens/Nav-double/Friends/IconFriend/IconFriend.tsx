import React from 'react';
import style from'./IconFriend.module.css';
import {NavLink} from "react-router-dom";

type propsTypeFriend={
    id:string,
    avatar:string,
    online: boolean
}

 export function IconFriend (props: propsTypeFriend) {
     const online = (p:boolean) =>{
         if(p === false){
             return style.Friends_img___ofline
         } else if (p === true) {
             return style.Friends_img
         }
     }
     debugger
    return(
        <li className={style.Friends__li}>
            <NavLink  to={"/dialogs/" + props.id} ><img className={online(props.online)} width="50px" height="50px"   src={props.avatar} />

            </NavLink></li>

    )
 };

 export default IconFriend
