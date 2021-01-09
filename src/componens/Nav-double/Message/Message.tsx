import React from 'react';
import mail from "./img/mail.svg";
import style from './Message.module.css';
import {Link} from "react-router-dom";
  function Message (props: any) {
    return(
    <div className={style.message}>
        <button className={style.button}>
        <Link className="navigation__list-link" to = "/dialogs"><img src={mail} alt="" width="50px" height="50px"/></Link>
        </button>
    </div>
    )
 };

 export default Message