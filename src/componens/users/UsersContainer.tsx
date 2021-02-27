import React from "react";
import {connect} from "react-redux";
import {
    follow,
    inStateType,
    setPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unFollow,
    usersType
} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./users";
import preloader from "../../img/6.gif"
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../apiTS/API";

type MDTPtype = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: any) => void,
    setPage:(pagesNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
    toggleFollowingInProgress:(isFetching:boolean,id:number)=>void
}

class UserSAPIComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        usersAPI.getUsers(pageNumber,this.props.pageSize)
       .then(data => {
            this.props.setUsers(data.items)
        })
    }

    render() {

        return (<>
                {this.props.isFetching?<Preloader/>:null}
                <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
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
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}

export const UsersContainer = connect<inStateType, MDTPtype, {}, AppStateType>(MapStateToProps,
    {follow, unFollow, setUsers, setPage, setTotalUsersCount, toggleIsFetching,toggleFollowingInProgress})(UserSAPIComponent)

