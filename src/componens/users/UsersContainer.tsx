import React from "react";
import {connect} from "react-redux";
import {
    follow,
    inStateType,
    setPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    usersType
} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./users";
import preloader from "../../img/6.gif"
import {Preloader} from "../common/preloader/Preloader";

type MDTPtype = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: any) => void,
    setPage:(pagesNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    toggleIsFetching:(isFetching:boolean)=>void
}

class UserSAPIComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials: true}).then(response => {
            this.props.setUsers(response.data.items)
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
        isFetching:state.usersPage.isFetching
    }
}

/*const MapDispatchToProps = (dispatch: Dispatch): MDTPtype => {
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
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toogleLoadAC(isFetching))
        }
    }
}*/

export const UsersContainer = connect<inStateType, MDTPtype, {}, AppStateType>(MapStateToProps,
    {follow, unFollow, setUsers, setPage, setTotalUsersCount, toggleIsFetching})(UserSAPIComponent)

