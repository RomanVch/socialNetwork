import React from 'react';
import style from'./Online.module.css';
import offline from "./img/offline.svg";
import online from "./img/online.svg";
import { typePropsFriendObject} from "../../../redux/store";
type OnlineType ={
    PropsFriend:Array<typePropsFriendObject>
    setFriend:any
}

  function Online (props: any) {
      const onlineArray = ()=>{props.setFriend(props.PropsFriend.filter((p:typePropsFriendObject) => p.online))}
      const offlineArray = ()=>{props.setFriend(props.PropsFriend.filter((p:typePropsFriendObject) => !p.online))}
    return(
<div className={style.online}>
        <button onClick={()=>{onlineArray()}} className={`${style.button} ${style.button_margin}`}><img src={online} alt="" width="27px" height="27px"/></button>
        <button onClick={()=>{offlineArray()}} className={style.button}><img src={offline} alt="" width="27px" height="27px"/></button>
    </div>
    )
 };

 export default Online
