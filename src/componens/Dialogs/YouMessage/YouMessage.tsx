import React from 'react';
import style from './YouMessage.module.css'
type ProprsType = {
    message:string,
    dates:string
}


function YouMessage(props: ProprsType) {
  return (
   <div className={style.youMessage__block}>
       <div>
       <div className={style.youMessage__message} >
           <p>вы :</p>
            <p>{props.message}</p>

       </div>
       <p className ={style.youMessage__date}>{props.dates}</p>
       </div>
       <img  className="cococo__avatar" src={"https://www.blexar.com/avatar.png"} width="80px" height="80px"/>
       </div>
  )
};

export default YouMessage
