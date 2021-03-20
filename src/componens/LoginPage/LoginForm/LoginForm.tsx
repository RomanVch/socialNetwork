import React, {useEffect} from 'react';
import s from '../LoginPage.module.css';
import * as yup from "yup";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {authStateType, login, serverErrorAC} from "../../../redux/auth-reducer ";
import {AppStateType} from "../../../redux/redux-store";



export const LoginForm = (props: any) => {
const dispatch=useDispatch()
    debugger
    const sererError=useSelector<AppStateType,authStateType>(state =>state.auth.serverError)
    const validationSchema = yup.object({
        login: yup.string()
            .min(2, "Мин. длинна текста 2 символа")
            .max(60, "Макс. длинна текста 60 символов")
            .required('обязательное поле'),
        password: yup.string()
            .min(2, "Мин. длинна текста 2 символа")
            .max(60, "Макс. длинна текста 60 символов")
            .required('обязательное поле'),
    })

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            rememberMe:false
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            dispatch(serverErrorAC(""))
dispatch(login(values.login,values.password,values.rememberMe))
            console.log(values)
            resetForm({})
        },
    });
    useEffect(()=>{
    },[formik.values.rememberMe])
    return (

        <form onSubmit={formik.handleSubmit} className={s.loginForm}>
            <input
                id="login"
                name="login"
                value={formik.values.login}
                onChange={formik.handleChange}
                placeholder={"Login"}/>
            {formik.errors.login && formik.touched.login ? (
                <div className={s.error}>{formik.errors.login}</div>
            ) : null}
            <input placeholder="password"
                   id="password"
                   value={formik.values.password}
                   onChange={formik.handleChange}
                   name="password"
                   type={"password"}
            />
            {formik.errors.password && formik.touched.password ? (
                <div className={s.error}>{formik.errors.password}</div>
            ) : null}
            <div>
                   <input
                       name="rememberMe"
                       type="checkbox"
                       onChange={() => formik.setFieldValue('rememberMe', !formik.values.rememberMe)}

                   /> remember me</div>
            {sererError?<div className={s.error}>{sererError}</div>:""}

            <button type="submit">login</button>
        </form>


    )
};


