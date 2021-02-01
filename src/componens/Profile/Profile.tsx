import React, {useState} from 'react';
import BlockMessage from './blockMessage/blockMessage';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType,addPostActionCreator} from "../../redux/store";
import {MessageBlockContainers} from "./blockMessage/blockMessageСontainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type propsType = {
    mediaMessage: Array<MessageType>;
    textMessage:string
    dispatch:(active:any)=>void
}

function Profile(props: propsType) {


     const mediaMessage = useSelector<AppStateType, MessageType[]>(state=>state.post.postes)

    return (

        <section>
            <ImgMain/>
            <MessageBlockContainers/>

            {

                mediaMessage.map((p) => {
                    return <Chat key={p.id} mediaMessage={p} dispatch={props.dispatch}/>
                })
            }
        </section>
    )
};

export default Profile
