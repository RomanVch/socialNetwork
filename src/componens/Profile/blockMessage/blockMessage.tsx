import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import clip from './img/clip.svg';
import music from './img/music.svg';
import send from './img/send.svg';
import style from './blockMessage.module.css';
import {addPostActionCreator, upPostStateActionCreator} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";

type typeBlockMsg = {
    textMessage: string
    onChangeHandler :(e: ChangeEvent<HTMLInputElement>) => void
    addMsg : any
}

function BlockMessage(props: typeBlockMsg) {


    return (
        <form className={style.content__block_message}>
            <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                 src="https://www.blexar.com/avatar.png"/>
            <input onChange={props.onChangeHandler}  placeholder="Что нового ?"
                   className={style.content__block_message_input} type="text" value={props.textMessage}/>
            <div className={style.content__block_message_buttons}>
                <button type="button" className={style.content__block_message_button}><img width="40px" height="40px"
                                                                                           src={clip}/></button>
                <button type="button" className={style.content__block_message_button}><img width="40px" height="40px"
                                                                                           src={music}/></button>
                <button onClick={props.addMsg} type="button" className={style.content__block_message_button}><img width="40px"
                                                                                                            height="40px"
                                                                                                            src={send}/>
                </button>
            </div>
        </form>
    )
};

export default BlockMessage
