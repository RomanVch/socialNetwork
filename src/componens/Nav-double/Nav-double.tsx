import React,{useState} from 'react';
import style from './Nav_double.module.css';
import Friends from '../Nav-double/Friends/Friends';
import Online from '../Nav-double/Online/Online';
import Message from './Message/Message';
import {typePropsFriendObject} from "../../redux/store";
import {OnlineContainer} from "./Online/OnlineContainer";
import {FriendsContainer} from "./Friends/FriendsContainer";

type propsType={
    PropsFriend:typePropsFriendObject[]
}
function NavDouble (props:any) {
    const [friend,setFriend] = useState(props.PropsFriend)
    return (
<div className={style.Nav_double}>
    <OnlineContainer setFriend={setFriend}/>
    <FriendsContainer  friend={friend}/>
<Message/>
</div>
    )
}

export default NavDouble
