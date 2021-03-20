import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import clip from './img/clip.svg';
import music from './img/music.svg';
import send from './img/send.svg';
import style from './blockMessage.module.css';
import {addPostActionCreator, upPostStateActionCreator} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";
import {useFormik} from "formik";
import * as yup from "yup";

type typeBlockMsg = {
    textMessage: string
    onChangeHandler: (e: string) => void
    addMsg: any
}


function BlockMessage(props: typeBlockMsg) {
    const validationSchema = yup.object({
        message:yup.string()
            .min(2, "Мин. длинна текста 2 символа")
            .max(60, "Макс. длинна текста 60 символов")
    })
    const formik = useFormik({
        initialValues: {
            message: ""
        },validationSchema,
        onSubmit: (values,{resetForm}) => {
            debugger
            props.onChangeHandler(values.message)
            props.addMsg()
            resetForm({})

        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={style.content__block_message}>
            {formik.errors.message && formik.touched.message ? (
                <div className={style.dialogs__error} >{formik.errors.message}</div>
            ) : null}
            <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                 src="https://www.blexar.com/avatar.png"/>
            <input id="message"
                   name="message"
                   value={formik.values.message}
                   onChange={formik.handleChange}
                   placeholder="Что нового ?"
                   className={style.content__block_message_input} type="text"/>
            <div className={style.content__block_message_buttons}>
                <button type="button" className={style.content__block_message_button}><img width="40px" height="40px"
                                                                                           src={clip}/></button>
                <button type="button" className={style.content__block_message_button}><img width="40px" height="40px"
                                                                                           src={music}/></button>
                <button type="submit" className={style.content__block_message_button}><img width="40px"
                                                                                           height="40px"
                                                                                           src={send}/>
                </button>
            </div>
        </form>
    )
};

export default BlockMessage
