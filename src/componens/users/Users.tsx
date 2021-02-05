import React from "react";
import style from './Users.module.css';
import {inStateType, usersType} from "../../redux/user-reducer";
import s from "./Users.module.css"
import {usersPropsType} from "./UsersContainer";


function Users(props: usersPropsType) {
    if(props.users.length === 0){
    props.setUsers(
        [
            {
                id: 1,
                photoURL: "https://media.istockphoto.com/vectors/cartoon-animal-head-icon-cat-face-avatar-for-profile-of-vector-id542307016",
                fullName: 'Dmitry',
                status: 'I am boss',
                location: {city: "Minsk", country: "Belarus"},
                followed: true
            },
            {
                id: 2,
                photoURL: "https://media.istockphoto.com/vectors/cartoon-animal-head-icon-cat-face-avatar-for-profile-of-vector-id542307016",
                fullName: 'Vlad',
                status: 'I am boss2',
                location: {city: "Bobruisk", country: "Belarus"},
                followed: false
            },
            {
                id: 3,
                photoURL: "https://media.istockphoto.com/vectors/cartoon-animal-head-icon-cat-face-avatar-for-profile-of-vector-id542307016",
                fullName: 'Anton',
                status: 'I am boss3',
                location: {city: "Moscow", country: "Russia"},
                followed: false
            }])}
    return (
        <div>{

            props.users.map((u: usersType) => <div className={s.usersBlock} key={u.id}>
                <div className={s.usersBlockAvatar}>
                    <img
                        src={u.photoURL}
                        className={s.usersImg}
                        alt="аватар"/>
                    {

                        <button onClick={() => {
                            props.follow(u.id)
                        }}>{u.followed ? "follow" : "unfolow"}</button>

                    }
                </div>
                <div className={s.usersBlockInfo}>
                    <div className={s.usersBlockName}>
                        <p>{u.fullName}</p>
                        <p>{u.status}</p>
                    </div>
                    <div>
                        <p>{u.location.country}</p>
                        <p>{u.location.city}</p>
                    </div>
                </div>
            </div>)
        }</div>
    )
};

export default Users
