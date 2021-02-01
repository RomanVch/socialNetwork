import React, {useState, ChangeEvent} from 'react';
import style from "./MessageBlockDialog.module.css";
import clip from "../../Profile/blockMessage/img/clip.svg";
import music from "../../Profile/blockMessage/img/music.svg";
import send from "../../Profile/blockMessage/img/send.svg";
import {addMessageActionCreator, upMessageActionCreator} from "../../../redux/store";
import {MessageBlockPropsType} from "./MessageBlockDialogContainer";


export function MessageBlockDialog(props: MessageBlockPropsType) {


        return (
            <div className={style.dialogs__block_message}>

                <input onChange={props.onChangeHandler} value={props.txtMsg} placeholder="Что нового ?"
                       className={style.dialogs__block_message_input} type="text"/>
                <div className={style.dialogs__block_message_buttons}>
                    <button type="button" className={style.dialogs__block_message_button}><img width="40px"
                                                                                               height="40px"
                                                                                               src={clip}/></button>
                    <button type="button" className={style.dialogs__block_message_button}><img width="40px"
                                                                                               height="40px"
                                                                                               src={music}/></button>
                    <button type="button" onClick={props.addMessage(props.id)} className={style.dialogs__block_message_button}><img
                        width="40px" height="40px" src={send}/></button>
                </div>
                <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                     src="https://www.blexar.com/avatar.png"/>
            </div>
        )
    };
