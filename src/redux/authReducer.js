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
export const checkAuth = () => async (dispatch) => {
    const response = await serverCheckAuth()

    if (response.resultCode === 0) {
        dispatch(setUserData(response.data.id, response.data.email, response.data.login, true));
    }
}


export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
    const response = await serverLogin(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(checkAuth());
    } else {
        setStatus("Something wrong!")
    }

}


export const logout = () => async (dispatch) => {
    const response = await serverLogout()

    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
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
