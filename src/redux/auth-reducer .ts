const SET_USER_DATA = "SETUSERDATA"

type authStateType = {

    id: number,
    email: string,
    login: string
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: any = initialState, action: any): authStateType => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.id,
                ...action.email,
                ...action.login,
                isAuth: true
            }
        default:
            return state

    }
}
export type AuthReducerACType = (id: number, email: string, login: string) => ({ type: string, id: number, email: string, login: string })
export const authReducerAC: AuthReducerACType = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    id,email,login
})

export default authReducer;
