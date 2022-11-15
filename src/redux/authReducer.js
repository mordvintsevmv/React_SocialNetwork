/*

    INITIAL STATE

 */
import {serverCheckAuth} from "../api/api";

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
export const setUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
}


/*

    THUNK

 */
export const checkAuth = () =>{
    return (dispatch) => {
        serverCheckAuth().then(r => {
            if (r.resultCode === 0) {
                dispatch(setUserData(r.data.id, r.data.email, r.data.login));
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
                ...state, ...action.data, isAuth: true
            }
        }

        default:
            return state
    }
}
