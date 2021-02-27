const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_PAGE = "SET_PAGE",
    TOTAL_COUNT = "TOTAL_COUNT",
    TOGGLE_LOAD = "TOGGLE_LOAD",
    FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"

type locationType = {
    city: string,
    country: string
}
export type usersType = {
    id: number,
    photoURL: string,
    fullName: string,
    status: string,
    location: locationType
    followed: boolean
}

export type inStateType = {
    users: usersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress:any
}

type userACType = {
    type: "FOLLOW" | "UNFOLLOW" | "SET_USERS" | "SET_PAGE" | "TOTAL_COUNT" | "TOGGLE_LOAD"|"FOLLOWING_IN_PROGRESS"
    id?: number
    users?: any
    currentPage?: number | undefined
    totalCount?: number
    isFetching?: boolean
}


const initialState: inStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const follow = (ID: number) => ({type: FOLLOW, id: ID})
export const unFollow = (ID: number) => ({type: UNFOLLOW, id: ID})
export const setUsers = (users: usersType) => ({type: SET_USERS, users})
export const setPage = (currentPage: number) => ({type: SET_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number) => ({type: TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_LOAD, isFetching})
export const toggleFollowingInProgress = (isFetching: boolean,id:number) => ({type: FOLLOWING_IN_PROGRESS, isFetching,id})


const userReducer = (state = initialState, action: userACType): inStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: !u.followed}
                        } else {
                            return u
                        }
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage ? action.currentPage : 1}
        }
        case TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount ? action.totalCount : 1}
        }
        case TOGGLE_LOAD: {
            return {...state, isFetching: action.isFetching ? action.isFetching : false}
        }
        case FOLLOWING_IN_PROGRESS:{
            return {...state,followingInProgress:action.isFetching
                    ?[...state.followingInProgress,action.id]
                    : [...state.followingInProgress.filter((id:any)=>id!=action.id)]}
        }
        default:
            return state
    }


}
export default userReducer
