import React, {useState, ChangeEvent} from 'react';
import {addMessageActionCreator, upMessageActionCreator} from "../../../redux/store";
import {MessageBlockDialog} from "./MessageBlockDialog";
import {connect} from "react-redux"
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";







/*export function MessageBlockDialogContainer(props: typeMessage) {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(upMessageActionCreator(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(addMessageActionCreator(props.id))
    }

    return (
        <MessageBlockDialog onChangeHandler={onChangeHandler} addMessage={addMessage} txtMsg={props.txtMsg}/>
    );
}*/

type OwnPropsType = {
    id?: string
}

type MSTPType = {
    txtMsg: string
}

type MDTPType = {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    addMessage: any
}

export type MessageBlockPropsType = OwnPropsType & MSTPType & MDTPType

let mapStateProps = (state: AppStateType): MSTPType => {
    return {
        txtMsg: state.friendMessage.textMessage
    }
}

let mapDispatch = (dispatch: Dispatch): MDTPType => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(upMessageActionCreator(e.currentTarget.value))
        },
        addMessage: (id: string) => {

            dispatch(addMessageActionCreator(id))
        }
    }
}



export const SuperMessageBlockDialogContainer = connect<MSTPType, MDTPType, {}, AppStateType>(mapStateProps,mapDispatch)(MessageBlockDialog)

