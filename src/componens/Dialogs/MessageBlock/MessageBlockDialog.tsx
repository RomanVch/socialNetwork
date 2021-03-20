import React, {useState, ChangeEvent} from 'react';
import style from "./MessageBlockDialog.module.css";
import clip from "../../Profile/blockMessage/img/clip.svg";
import music from "../../Profile/blockMessage/img/music.svg";
import send from "../../Profile/blockMessage/img/send.svg";
import {MessageBlockPropsType} from "./MessageBlockDialogContainer";
import {useFormik} from "formik";
import * as yup from 'yup';

export function MessageBlockDialog(props: MessageBlockPropsType) {

    const validationSchema = yup.object({
        message:yup.string()
            .min(2, "Мин. длинна текста 2 символа")
            .max(60, "Макс. длинна текста 60 символов")
    })

        const formik = useFormik({
            initialValues: {
                message: ""
        },
validationSchema,
            onSubmit: (values,{resetForm}) => {
                debugger
                props.onChangeHandler(values.message)
                props.addMessage(props.id)
                resetForm({})
               },
        });

        return (
            <form onSubmit={formik.handleSubmit} className={style.dialogs__block_message}>
                {formik.errors.message && formik.touched.message ? (
                    <div className={style.dialogs__error} >{formik.errors.message}</div>
                ) : null}
                <input
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    placeholder="Что нового ?"
                    className={style.dialogs__block_message_input} type="text"/>

                <div className={style.dialogs__block_message_buttons}>
                    <button type="button" className={style.dialogs__block_message_button}><img width="40px"
                                                                                               height="40px"
                                                                                               src={clip}/></button>
                    <button type="button" className={style.dialogs__block_message_button}><img width="40px"
                                                                                               height="40px"
                                                                                               src={music}/></button>
                    <button type="submit"
                            className={style.dialogs__block_message_button}><img
                        width="40px" height="40px" src={send}/></button>
                </div>
                <img className="cococo__avatar cococo__avatar--message" width="80px" height="80px"
                     src="https://www.blexar.com/avatar.png"/>
            </form>
        )
    };
