import React, {useState, ChangeEvent} from 'react';
import style from "./MessageBlockDialog.module.css";
import clip from "../../Profile/blockMessage/img/clip.svg";
import music from "../../Profile/blockMessage/img/music.svg";
import send from "../../Profile/blockMessage/img/send.svg";

type typeMessage = {
    id: string,
    PropsMessage: any,
    setPropsMessage: (PropsMessage: any) => void
    dispatch: (active: any) => void
    txtMsg: string
}

export function MessageBlockDialog(props: typeMessage) {
    const [message, setmessage] = useState(props.PropsMessage[props.id])
    const [text, setText] = useState("")
    let today: any = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    yyyy = yyyy.toString().substr(-2);
    today = dd + '.' + mm + '.' + yyyy;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        props.dispatch({type: "UP-MESSAGE-STATE", addingPost: e.currentTarget.value})
    }
        const addMessage = () => {
            props.dispatch({type: "ADD-MESSAGE", id:props.id,time:today})
        }

        return (
            <div className={style.dialogs__block_message}>

                <input onChange={onChangeHandler} value={props.txtMsg} placeholder="Что нового ?"
                       className={style.dialogs__block_message_input} type="text"/>
                <div className={style.dialogs__block_message_buttons}>
                    <button type="button" className={style.dialogs__block_message_button}><img width="40px"
                                                                                               height="40px"
                                                                                               src={clip}/></button>
                    <button type="button" className={style.dialogs__block_message_button}><img width="40px"
                                                                                               height="40px"
                                                                                               src={music}/></button>
                    <button type="button" onClick={addMessage} className={style.dialogs__block_message_button}><img
                        width="40px" height="40px" src={send}/></button>
                </div>
                <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                     src="https://www.blexar.com/avatar.png"/>
            </div>
        )
    };
