import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import clip from './img/clip.svg';
import music from './img/music.svg';
import send from './img/send.svg';
import style from './blockMessage.module.css';
import {addMessageActionCreator, addPostActionCreator, upPostStateActionCreator} from "../../../redux/store";
import BlockMessage from "./blockMessage";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type MSTPType = {
    textMessage: string
}

type MDTPType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    addMsg: (id: string)=>void
}



let mapStateProps = (state:AppStateType): MSTPType => {
    return {
        textMessage: state.post.textPost
    }
}

let mapDispatch = (dispatch: Dispatch): MDTPType => {
    return {
        onChangeHandler : (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(upPostStateActionCreator(e.currentTarget.value))
        },
        addMsg: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MessageBlockContainers = connect<MSTPType,MDTPType,{},AppStateType>(mapStateProps, mapDispatch)(BlockMessage)
