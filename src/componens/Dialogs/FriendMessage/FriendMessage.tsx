import React from 'react';
import style from './FriendMessage.module.css'
type PropsType = {
    message:string,
    dates:string,
    avatar:string,
    name:string
}

function FriendMessage(props: PropsType) {
  return (
      <div className={style.friendMessage__block}>
          <img  className="cococo__avatar" src={props.avatar} width="80px" height="80px"/>
          <div>
              <div className={style.friendMessage__message} >
                  <p>{props.name +" :"}</p>
                  <p>{props.message}</p>

              </div>
              <p className ={style.friendMessage__date}>{props.dates}</p>
          </div>

      </div>
  )
};

export default FriendMessage
