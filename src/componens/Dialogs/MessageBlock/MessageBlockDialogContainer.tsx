import React, {useState, ChangeEvent} from 'react';
import {addMessageActionCreator, upMessageActionCreator} from "../../../redux/store";
import {MessageBlockDialog} from "./MessageBlockDialog";
import {connect} from "react-redux"
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";



type OwnPropsType = {
    id?: string
}

type MSTPType = {
    txtMsg: string
}

type MDTPType = {
    onChangeHandler: (e:string) => void
    addMessage: any
}

export type MessageBlockPropsType = OwnPropsType & MSTPType & MDTPType




export function MessageBlockDialogContainer(props: MessageBlockPropsType) {



    return (
        <MessageBlockDialog id={props.id}onChangeHandler={props.onChangeHandler} addMessage={props.addMessage} txtMsg={props.txtMsg}/>
    );
}


let mapStateProps = (state: AppStateType): MSTPType => {
    return {
        txtMsg: state.friendMessage.textMessage
    }
}

let mapDispatch = (dispatch: Dispatch): MDTPType => {
    return {
        onChangeHandler: (e:string) => {
            dispatch(upMessageActionCreator(e))
        },
        addMessage: (id: string) => {
            dispatch(addMessageActionCreator(id))
        }
    }
}



export const SuperMessageBlockDialogContainer = connect<MSTPType, MDTPType, {}, AppStateType>(mapStateProps,mapDispatch)(MessageBlockDialogContainer)

