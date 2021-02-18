import React, {useEffect, useState} from 'react';
import BlockMessage from './blockMessage/blockMessage';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType,addPostActionCreator} from "../../redux/store";
import {MessageBlockContainers} from "./blockMessage/blockMessageСontainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Preloader} from "../common/preloader/Preloader";

type propsType = {
    mediaMessage: Array<MessageType>;
    textMessage:string
    profile:any
}

function Profile(props: propsType) {
    if(props.profile.photos === undefined){
        return <Preloader/>
    }

    console.log(props.profile)
    return (

        <section>
            <ImgMain profile={props.profile}/>
            <MessageBlockContainers/>

            {

                props.mediaMessage.map((p) => {
                    return <Chat key={p.id} mediaMessage={p} />
                })
            }
        </section>
    )
};

export default Profile
