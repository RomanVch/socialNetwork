import React from "react";
import s from "./Users.module.css";
import avatarDefolt from "../../img/defoltAvatar.png";
import {NavLink} from "react-router-dom";

type usersTypes = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: null | string
        large: null
    }
    status: null | string
    followed: boolean
}



export let Users = (props:any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    console.log(props.users)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <button onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.active : ""}>{p}</button>
            })}
        </div>
        <div>{
            props.users.map((u: usersTypes) => <div className={s.usersBlock} key={u.id}>
                <div className={s.usersBlockAvatar}>
                    <NavLink to={"/profile/"+u.id}>      <img
                        src={u.photos.small === null ? avatarDefolt : u.photos.small}
                        className={s.usersImg}
                        alt="аватар"/>
                    </NavLink>
                    {

                        <button onClick={() => {
                            props.follow(u.id)
                        }}>{u.followed ? "follow" : "unfolow"}</button>

                    }
                </div>

                <div className={s.usersBlockInfo}>
                    <div className={s.usersBlockName}>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                    </div>
                    <div>
                        <p>{"u.location.country"}</p>
                        <p>{"u.location.city"}</p>
                    </div>
                </div>
            </div>)
        }</div>
    </div>
}
