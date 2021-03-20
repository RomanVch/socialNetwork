import React, {useState} from 'react';
import {connect, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {
    getProfileStatusThunk,
    profileThunk,
    setUserProfileAC,
    updateProfileStatusThunk
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/authRedirectHOC";
import {compose} from "redux";



class ProfileContainers extends React.Component<any, any> {

    componentDidMount() {
        let userId=this.props.match.params.userId
        if (!userId){
            userId=this.props.defaultId
        }
       this.props.profileThunk(userId)
this.props.getProfileStatusThunk(userId)

    }

    render() {
        return (
            <Profile
                mediaMessage={this.props.mediaMessage}
                textMessage={this.props.textMessage}
                profile={this.props.profile}
                isAuth={this.props.isAuth}
                status={this.props.status}
                updateStatus={this.props.updateProfileStatusThunk}
            />
        )


    }
}
type MSPtype={
    mediaMessage:{    id: number,
        name: string,
        like: number,
        avatar: string,
        message: string}[],
    textMessage:string,
profile:any,
    defaultId:number,
    isAuth:boolean,
status:string
}

type MDPtype= {
    setUserProfileAC: (profile: any) => void
    profileThunk: (userId: number) => void
    getProfileStatusThunk: (userId: number) => void,
    updateProfileStatusThunk: (status: string) => void
}

let mapStateProps = (state: AppStateType):MSPtype => {
    return {
        mediaMessage:state.post.postes,
        textMessage:state.post.textPost,
        profile:state.post.profile,
        defaultId:state.auth.id,
        isAuth:state.auth.isAuth,
        status:state.post.status
    }
}
export const WithAuthProfileRedirectHOC = compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect<MSPtype,MDPtype,{},AppStateType>(mapStateProps,{setUserProfileAC,profileThunk,getProfileStatusThunk,updateProfileStatusThunk}))
(ProfileContainers)




/*const WithRouterProfileContainer=withRouter(ProfileContainers)

export const ProfileContainer=connect<MSPtype,MDPtype,{},AppStateType>(mapStateProps,{setUserProfileAC,profileThunk})(WithRouterProfileContainer);
export const WithAuthProfileRedirectHOC = withAuthRedirect(ProfileContainer)*/
