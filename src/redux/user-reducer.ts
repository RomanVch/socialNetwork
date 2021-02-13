const FOLLOW="FOLLOW",
    UNFOLLOW="UNFOLLOW",
    SET_USERS="SET_USERS",
    SET_PAGE="SET_PAGE",
    TOTAL_COUNT="TOTAL_COUNT"
type locationType = {
    city: string,
    country: string
}
export type usersType = {
    id: number,
    photoURL:string,
    fullName: string,
    status: string,
    location: locationType
    followed: boolean
}

export type inStateType = {
    users: usersType[],
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
}

type userACType = {
    type: "FOLLOW" | "UNFOLLOW" | "SET_USERS"|"SET_PAGE"|"TOTAL_COUNT"
    id?: number
    users?:any
    currentPage?:number | undefined
    totalCount?:number
}


const initialState:inStateType =  {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1
}


export const followAC = (ID: number) => ({type: FOLLOW, id: ID})
export const unFollowAC = (ID: number) => ({type: UNFOLLOW, id: ID})
export const setUsersAC = (users: usersType) => ({type: SET_USERS, users})
export const setPageAC=(currentPage:number)=>({type:SET_PAGE,currentPage})
export const setTotalUsersCountAC=(totalCount:number)=>({type:TOTAL_COUNT,totalCount})


const userReducer = (state = initialState, action: userACType): inStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: !u.followed}
                        } else {return u}
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: false}
                        } else {return u}
                    }
                )
            }
            case SET_USERS:
            return {...state,users: action.users}
        case SET_PAGE:{
            return {...state,currentPage:action.currentPage?action.currentPage:1}
        }
        case TOTAL_COUNT:{
            return {...state,totalUsersCount:action.totalCount?action.totalCount:1}
        }
        default:
            return state
    }


}
export default userReducer
