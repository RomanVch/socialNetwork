import React, {useState} from 'react';
import BlockMessage from './blockMessage/blockMessage';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType,addPostActionCreator} from "../../redux/store";
import {MessageBlockContainers} from "./blockMessage/blockMessageСontainer";
import {connect, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";


type MSPtype={
    mediaMessage:{    id: number,
        name: string,
        like: number,
        avatar: string,
        message: string}[]
    textMessage:string
}

let mapStateProps = (state: AppStateType):MSPtype => {
    return {
        mediaMessage:state.post.postes,
        textMessage:state.post.textPost
    }
}

export const ProfileContainer=connect<MSPtype,{},{},AppStateType>(mapStateProps)(Profile);

