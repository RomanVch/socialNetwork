import React, {useState} from 'react';
import BlockMessage from './blockMessage/blockMessage';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType,addPostActionCreator} from "../../redux/store";
import BlockMessageContainer from "./blockMessage/blockMessageСontainer";

type propsType = {
    mediaMessage: Array<MessageType>;
    textMessage:string
    dispatch:(active:any)=>void
}

function Profile(props: propsType) {




    return (

        <section>
            <ImgMain/>
            <BlockMessageContainer  dispatch={props.dispatch} textMessage={props.textMessage}/>

            {

                props.mediaMessage.map((p) => {
                    return <Chat key={p.id} mediaMessage={p} dispatch={props.dispatch}/>
                })
            }
        </section>
    )
};

export default Profile
