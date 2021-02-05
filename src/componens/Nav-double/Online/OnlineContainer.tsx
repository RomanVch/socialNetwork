import React from 'react';
import style from'./Online.module.css';
import offline from "./img/offline.svg";
import online from "./img/online.svg";
import { typePropsFriendObject} from "../../../redux/store";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import Online from "./Online";
type OnlineType ={
    PropsFriend:Array<typePropsFriendObject>
    setFriend:any
}



let mapStateType= (state:AppStateType) => {return {
    PropsFriend: state.friendMessage.PropsFriend
}}

export const OnlineContainer = connect(mapStateType)(Online)
