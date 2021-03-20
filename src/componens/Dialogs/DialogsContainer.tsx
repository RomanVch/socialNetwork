import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../HOC/authRedirectHOC";
import {Preloader} from "../common/preloader/Preloader";
import {withRouter} from "react-router";

class DialogsSAPIComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
console.log(this.props.PropsFriend)
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Dialogs
                    PropsFriend={this.props.PropsFriend}
                    PropsMessage={this.props.PropsMessage}
                    txtMsg={this.props.txtMsg}
                />

            </>
        )
    }
}

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
    export const WithAuthDialogsRedirectHOC = compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect<MSPtype,{},{},AppStateType>(mapStateProps))
(DialogsSAPIComponent)
console.log(WithAuthDialogsRedirectHOC)
/*
const WithRouterProfileContainer=withRouter(DialogsSAPIComponent)
export const DialogsContainer = connect<MSPtype,{},{},AppStateType>(mapStateProps)(WithRouterProfileContainer)
export const WithAuthDialogsRedirectHOC = withAuthRedirect(DialogsContainer)
*/
