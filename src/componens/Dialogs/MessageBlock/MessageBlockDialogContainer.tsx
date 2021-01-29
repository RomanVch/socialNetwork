import React, {useState, ChangeEvent} from 'react';
import style from "./MessageBlockDialog.module.css";
import clip from "../../Profile/blockMessage/img/clip.svg";
import music from "../../Profile/blockMessage/img/music.svg";
import send from "../../Profile/blockMessage/img/send.svg";
import {addMessageActionCreator, upMessageActionCreator} from "../../../redux/store";
import {MessageBlockDialog} from "./MessageBlockDialog";

type typeMessage = {
    id: string,
    PropsMessage: any,
    setPropsMessage: (PropsMessage: any) => void
    dispatch: (active: any) => void
    txtMsg: string
}
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

export function MessageBlockDialogContainer(props: typeMessage) {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        props.dispatch(upMessageActionCreator(e.currentTarget.value))
    }
    const addMessage = () => {
        props.dispatch(addMessageActionCreator(props.id))
    }

    return (
        <MessageBlockDialog onChangeHandler={onChangeHandler} addMessage={addMessage} txtMsg={props.txtMsg}/>
    )
};
