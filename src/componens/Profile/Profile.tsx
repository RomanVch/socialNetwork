import React, {useState} from 'react';
import BlockMessage from './blockMessage/blockMessage';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType} from "../../redux/state";

type propsType = {
    mediaMessage: Array<MessageType>;
    addPostState: (addingPost: MessageType) => void
    upPostState: (addingPost: string) => void
    textMessage:string
}

function Profile(props: propsType) {

    const addPost = (message: string) => {
        const posting = {
            id: props.mediaMessage[0].id + 1,
            name: "Константин",
            like: 0,
            avatar: "https://www.blexar.com/avatar.png",
            message: message,
        }
        props.addPostState(posting)
    }


    const addLike = (like: number, propsLike: number, setLike: any) => {

        if (like === propsLike) {
            setLike(like + 1)
        } else {
            setLike(like - 1)

        }
    }
    return (

        <section>
            <ImgMain/>
            <BlockMessage addPost={addPost} upPostState={props.upPostState} textMessage={props.textMessage}/>

            {

                props.mediaMessage.map((p) => {
                    return <Chat key={p.id} mediaMessage={p} addLike={addLike}/>
                })
            }
        </section>
    )
};

export default Profile
