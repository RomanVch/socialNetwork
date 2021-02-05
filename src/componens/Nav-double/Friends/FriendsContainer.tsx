import React from "react";
import style from'./Friends.module.css';
import {IconFriend} from './IconFriend/IconFriend'
import {typePropsFriendObject} from "../../../redux/store";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
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


type MSPtype ={
    PropsFriend:Array<typePropsFriendObject>
}

let mapStateProps = (state: AppStateType):MSPtype => {
    return {
        PropsFriend:state.friendMessage.PropsFriend,
    }
}

export const FriendsContainer = connect(mapStateProps)(Friends)
