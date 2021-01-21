import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import clip from './img/clip.svg';
import music from './img/music.svg';
import send from './img/send.svg';
import style from './blockMessage.module.css';
import {addPostActionCreator, upPostStateActionCreator} from "../../../redux/store";

type typeBlockMsg = {
    textMessage: string
    dispatch: (active: any) => void
}

function BlockMessage(props: typeBlockMsg) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
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
        <form className={style.content__block_message}>
            <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                 src="https://www.blexar.com/avatar.png"/>
            <input onChange={onChangeHandler} onKeyPress={onKeyPressHandler} placeholder="Что нового ?"
                   className={style.content__block_message_input} type="text" value={props.textMessage}/>
            <div className={style.content__block_message_buttons}>
                <button type="button" className={style.content__block_message_button}><img width="40px" height="40px"
                                                                                           src={clip}/></button>
                <button type="button" className={style.content__block_message_button}><img width="40px" height="40px"
                                                                                           src={music}/></button>
                <button onClick={addMsg} type="button" className={style.content__block_message_button}><img width="40px"
                                                                                                            height="40px"
                                                                                                            src={send}/>
                </button>
            </div>
        </form>
    )
};

export default BlockMessage
