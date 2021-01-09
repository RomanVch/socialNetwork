import React,{useState} from 'react';
import style from './Nav_double.module.css';
import Friends from '../Nav-double/Friends/Friends';
import Online from '../Nav-double/Online/Online';
import Message from './Message/Message';
import {typePropsFriendObject} from "../../redux/state";

type propsType={
    PropsFriend:Array<typePropsFriendObject>
}
function NavDouble (props:propsType) {
    const [friend,setFriend] = useState(props.PropsFriend)
    return (
<div className={style.Nav_double}>
    <Online PropsFriend={props.PropsFriend} setFriend={setFriend}/>
    <Friends PropsFriend={props.PropsFriend} friend={friend}/>
<Message/>
</div>
    )
}

export default NavDouble