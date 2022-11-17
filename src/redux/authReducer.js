/*

    INITIAL STATE

 */
import {serverCheckAuth, serverLogin, serverLogout} from "../api/api";

const initial_state = {
    id: null, email: null, login: null, isAuth: false
}


/*

    ACTION TYPES

 */
const SET_USER_DATA = 'SET_USER_DATA'


/*

    ACTION CREATORS

 */
export const setUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, id, email, login, isAuth
    }
}


/*

    THUNK

 */
export const checkAuth = () => {
    return (dispatch) => {
        serverCheckAuth().then(r => {
            if (r.resultCode === 0) {
                dispatch(setUserData(r.data.id, r.data.email, r.data.login, true));
            }
        })
    }
}


export const login = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        serverLogin(email, password, rememberMe).then(r => {
            if (r.resultCode === 0) {
                dispatch(checkAuth());
            } else{
                setStatus("Something wrong!")
            }
        })

    }
}


export const logout = () => {
    return (dispatch) => {
        serverLogout().then(r => {
            if (r.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })

    }
}
/*

    REDUCER

 */
export const authReducer = (state = initial_state, action) => {
    switch (action.type) {
        case(SET_USER_DATA): {
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth,
            }
        }

        default:
            return state
    }
}
