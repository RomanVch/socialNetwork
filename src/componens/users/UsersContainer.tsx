import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    inStateType,
    setPage,
    toggleFollowingInProgress,
    onPageChanged
} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./users";
import {Preloader} from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../HOC/authRedirectHOC";
import {compose} from "redux";
import {withRouter} from "react-router";
import {MSPtype} from "../Dialogs/DialogsContainer";


type MDTPtype = {
    follow: (id:number,followed:boolean) => void
    setPage: (pagesNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, id: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChanged:(pageNumber:number,pageSize:number)=>void
}

class UserSAPIComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }



    render() {

        return (<>
                {this.props.isFetching?<Preloader/>:null}
                <Users
                onPageChanged={this.props.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
                {...this.props}
            />

            </>
        )
    }
}

export type usersPropsType = MDTPtype & inStateType




const MapStateToProps = (state: AppStateType):inStateType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}

export const WithAuthRedirectHOC = compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect<inStateType, MDTPtype, {}, AppStateType>(MapStateToProps,
        {follow, setPage, toggleFollowingInProgress,onPageChanged,getUsersThunkCreator}))
(UserSAPIComponent)


/*
const UsersContainer = connect<inStateType, MDTPtype, {}, AppStateType>(MapStateToProps,
    {follow, setPage, toggleFollowingInProgress,onPageChanged,getUsersThunkCreator})(UserSAPIComponent)

export const WithAuthRedirectHOC = withAuthRedirect(UsersContainer)*/
