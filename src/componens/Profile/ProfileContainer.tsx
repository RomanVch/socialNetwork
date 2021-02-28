import React, {useState} from 'react';
import BlockMessage from './blockMessage/blockMessage';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType,addPostActionCreator} from "../../redux/store";
import {MessageBlockContainers} from "./blockMessage/blockMessageСontainer";
import {connect, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {profileThunk, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {usersAPI} from "../../apiTS/API";


class ProfileContainers extends React.Component<any, any> {

    componentDidMount() {
        let userId=this.props.match.params.userId
        if (!userId){
            userId=this.props.defaultId
        }
       this.props.profileThunk(userId)

    }

    render() {
        return (
            <Profile mediaMessage={this.props.mediaMessage} textMessage={this.props.textMessage} profile={this.props.profile}/>
        )


    }
}
type MSPtype={
    mediaMessage:{    id: number,
        name: string,
        like: number,
        avatar: string,
        message: string}[]
    textMessage:string
profile:any,
    defaultId:number
}

type MDPtype={
    setUserProfileAC:(profile:any)=>void
    profileThunk:(userId:number)=>void
}

let mapStateProps = (state: AppStateType):MSPtype => {
    return {
        mediaMessage:state.post.postes,
        textMessage:state.post.textPost,
        profile:state.post.profile,
        defaultId:state.auth.id
    }
}

const WithRouterProfileContainer=withRouter(ProfileContainers)

export const ProfileContainer=connect<MSPtype,MDPtype,{},AppStateType>(mapStateProps,{setUserProfileAC,profileThunk})(WithRouterProfileContainer);

