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
import {setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainers extends React.Component<any, any> {

    componentDidMount() {
        let userId=this.props.match.params.userId
        if (!userId){
            userId=2
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                    this.props.setUserProfileAC(response.data)
                })

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
profile:any
}

type MDPtype={
    setUserProfileAC:(profile:any)=>void
}

let mapStateProps = (state: AppStateType):MSPtype => {
    return {
        mediaMessage:state.post.postes,
        textMessage:state.post.textPost,
        profile:state.post.profile
    }
}

const WithRouterProfileContainer=withRouter(ProfileContainers)

export const ProfileContainer=connect<MSPtype,MDPtype,{},AppStateType>(mapStateProps,{setUserProfileAC})(WithRouterProfileContainer);

