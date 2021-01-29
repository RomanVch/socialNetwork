import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import clip from './img/clip.svg';
import music from './img/music.svg';
import send from './img/send.svg';
import style from './blockMessage.module.css';
import {addPostActionCreator, upPostStateActionCreator} from "../../../redux/store";
import BlockMessage from "./blockMessage";

type typeBlockMsg = {
    textMessage: string
    dispatch: (active: any) => void
}


export function BlockMessageContainer(props: typeBlockMsg) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(upPostStateActionCreator(e.currentTarget.value))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            return addMsg()
        }
    }
    const addMsg = () => {

        props.dispatch(addPostActionCreator(props.textMessage))

    }

    return (
        <BlockMessage onChangeHandler={onChangeHandler}
                      textMessage={props.textMessage}
                      onKeyPressHandler={onKeyPressHandler}
                      addMsg={addMsg}/>
    )
};

export default BlockMessageContainer
