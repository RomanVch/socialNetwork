import React, {useState} from 'react';
import style from './Chat.module.css';
import heart from './img/heart.svg'
import {addLikeActionCreator} from "../../../redux/store";
import {useDispatch} from "react-redux";


type propsType = {
    mediaMessage: {
        avatar: string;
        name: string
        message: string
        like: number
    }


}

function Chat(props: propsType) {
    const [like,setLike]= useState(props.mediaMessage.like)
const dispatch=useDispatch()
const Fun = ()=> {

     return dispatch(addLikeActionCreator(like,props.mediaMessage.like,setLike))}
    return (
        <div>
            <div className={style.content__message}>
                <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                     src={props.mediaMessage.avatar}/>
                <div className={style.content__chat_paragraf}>
                    <p>{props.mediaMessage.name}</p>
                    <p>{props.mediaMessage.message}</p>
                    <div className={style.like__block}>
                       <button onClick={Fun}> <img className={style.like__svg} width="40px" height="40px" src={heart}/> </button>
                        <span className={style.like__how}>{like}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat
