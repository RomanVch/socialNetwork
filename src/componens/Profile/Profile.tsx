import React from 'react';
import Chat from './Chat/Chat';
import ImgMain from './imgMain/imgMain';
import {MessageType} from "../../redux/store";
import {MessageBlockContainers} from "./blockMessage/blockMessageСontainer";
import {Preloader} from "../common/preloader/Preloader";
import {Redirect} from "react-router";

type propsType = {
    mediaMessage: Array<MessageType>;
    textMessage:string
    profile:any
    isAuth:boolean
    status:string
    updateStatus:(status:string)=>void
}

function Profile(props: propsType) {

    if (!props.isAuth) {

        return <Redirect to={"/login"}/>
    } else {
        if (props.profile.photos === undefined) {
            return <Preloader/>
        }

        console.log(props.profile)

        return (

            <section>
                <ImgMain profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
                <MessageBlockContainers/>

                {

                    props.mediaMessage.map((p) => {
                        return <Chat key={p.id} mediaMessage={p}/>
                    })
                }
            </section>
        )
    }
}
export default Profile
