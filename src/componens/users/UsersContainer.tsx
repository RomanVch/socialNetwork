import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, inStateType, setUsersAC, unFollowAC, usersType} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MDTPtype = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: any) => void
}

export type usersPropsType = MDTPtype & inStateType


const MapStateToProps = (state: AppStateType): inStateType => {
    return {
        users: state.usersPage.users
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MDTPtype => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<inStateType, MDTPtype, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(Users)

