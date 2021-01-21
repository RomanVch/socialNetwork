import React from "react";
import style from'./Friends.module.css';
import {IconFriend} from './IconFriend/IconFriend'
import {typePropsFriendObject} from "../../../redux/store";
type propsType ={
    PropsFriend:Array<typePropsFriendObject>
    friend:Array<typePropsFriendObject>
}

  function Friends (props: any) {

    return(
<div className={style.Friends}>
    <ul className={style.Friends__ul}>


            {props.friend.map((p: typePropsFriendObject) =>{
                return <IconFriend avatar={p.avatar} online={p.online} id={p.id} />
            })}

    </ul>
</div>
    )
 };

 export default Friends
