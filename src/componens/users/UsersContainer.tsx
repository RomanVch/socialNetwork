import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    inStateType,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    usersType
} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./users";

type MDTPtype = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: any) => void,
    setPage:(pagesNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

class UserSAPIComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (<><Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
            />

            </>
        )
    }
}

export type usersPropsType = MDTPtype & inStateType


const MapStateToProps = (state: AppStateType): inStateType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
        },
        setPage:(pagesNumber:number)=>{
            dispatch(setPageAC(pagesNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect<inStateType, MDTPtype, {}, AppStateType>(MapStateToProps, MapDispatchToProps)(UserSAPIComponent)

