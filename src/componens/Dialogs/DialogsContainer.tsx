import React, {ChangeEvent, useState} from 'react';
import YouMessage from "./YouMessage/YouMessage";
import FriendMessage from "./FriendMessage/FriendMessage";
import close from "./img/close.svg";
import style from "./Dialogs.module.css"
import {
    addMessageActionCreator,
    friendMessageType,
    typePropsFriendObject,
    upMessageActionCreator
} from "../../redux/store";
import {MessageBlockDialog} from "./MessageBlock/MessageBlockDialog";
import {
    SuperMessageBlockDialogContainer
} from "./MessageBlock/MessageBlockDialogContainer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";


export type  MSPtype={
    PropsFriend: {    id: string,
        avatar: string
        online: boolean
        name: string }[],
    PropsMessage:any,
    txtMsg:string
}

let mapStateProps = (state: AppStateType):MSPtype => {
    return {
        PropsFriend:state.friendMessage.PropsFriend,
        PropsMessage:state.friendMessage.PropsFriendMessage,
        txtMsg:state.friendMessage.textMessage
    }
}

export const DialogsContainer = connect<MSPtype,{},{},AppStateType>(mapStateProps)(Dialogs)


