import React, {useState} from "react";
import s from "./Users.module.css";
import avatarDefolt from "../../img/defoltAvatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../apiTS/API";

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


export let Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let [pagesListButton, setPagesListButton] = useState(5)
    console.log(props.users)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger
    return <div>
        <div>
            <button onClick={() => setPagesListButton(pagesListButton - 5)}>...</button>
            {pages.map((p, i) => {
                if (i < pagesListButton) {

                    return <button key={i} onClick={(e) => {
                        props.onPageChanged(p,props.pageSize)
                    }} className={props.currentPage === p ? s.active : ""}>{p}</button>

                } else {
                    return
                }

            })}
            <button onClick={() => setPagesListButton(5 + pagesListButton)}>...</button>
        </div>

        <div>{

            props.users.map((u: usersTypes) => <div className={s.usersBlock} key={u.id}>
                <div className={s.usersBlockAvatar}>
                    <NavLink to={"/profile/" + u.id}> <img
                        src={u.photos.small === null ? avatarDefolt : u.photos.small}
                        className={s.usersImg}
                        alt="аватар"/>
                    </NavLink>
                    {

                        <button disabled={props.followingInProgress.some((id: any) => id === u.id)} onClick={() => {
props.follow(u.id,u.followed)


                            /*                            {
                                if (!u.followed) {
                                    props.toggleFollowingInProgress(true, u.id)
                                    usersAPI.followPostUser(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                                props.toggleFollowingInProgress(false, u.id)
                                            }
                                        })
                                } else {
                                    props.toggleFollowingInProgress(true, u.id)
                                    usersAPI.unFollowDeleteUser(u.id)
                                        .then(response => {

                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                                props.toggleFollowingInProgress(false, u.id)
                                            }

                                        })

                                }


                            }*/
                        }}>{u.followed ?
                            "follow" :
                            "unfolow"}
                        </button>

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
