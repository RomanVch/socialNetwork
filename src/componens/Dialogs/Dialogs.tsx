import React, {useState} from 'react';
import YouMessage from "./YouMessage/YouMessage";
import FriendMessage from "./FriendMessage/FriendMessage";
import close from "./img/close.svg";
import style from "./Dialogs.module.css"
import {typePropsFriendObject} from "../../redux/store";
import {MessageBlockDialog} from "./MessageBlock/MessageBlockDialog";
import {MessageBlockDialogContainer} from "./MessageBlock/MessageBlockDialogContainer";

type propsType = {
    PropsFriend: Array<typePropsFriendObject>
    PropsMessage: any
    dispatch:(active:any)=>void
    txtMsg:string
}

type typeBlockMsg = {
    addPost: any
}

function Dialogs(props: any) {


    const [PropsMessage, setPropsMessage] = useState(props.PropsMessage);


    const actualDialogs = (id: any, messagee: any) => {
        return { ...PropsMessage,[id]:messagee}
    }

    const renderDialogs = props.PropsFriend.map((p: any) => {
        if (window.location.pathname === "/dialogs/" + p.id) {


            return (
                <div>
                    {
                        props.PropsMessage[p.id].map((m: any) => {
                                if (m.hasOwnProperty('you')) {
                                    return <YouMessage message={m.you} dates={m.data}/>
                                } else if (m.hasOwnProperty('friend')) {
                                    return <FriendMessage message={m.friend}
                                                          dates={m.data}
                                                          avatar={p.avatar}
                                                          name={p.name}/>
                                } else {
                                    return <div> пусто </div>;
                                }
                            }
                        )}
                    <MessageBlockDialogContainer PropsMessage={props.PropsMessage} setPropsMessage={setPropsMessage} id={p.id}
                                        dispatch={props.dispatch} txtMsg={props.txtMsg} />
                </div>
            )
        }
    })

    return (
        <section className={style.Dialogs__block}>
            <div className={style.Dialogs__head}><img/><p>личные сообщения</p>
                <button className={style.Dialogs__close}><img src={close} width='30px'/></button>
            </div>

            {renderDialogs}

        </section>
    )
};

export default Dialogs
