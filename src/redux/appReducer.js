/*

    INITIAL STATE

 */
import {checkAuth} from "./authReducer";

const initial_state = {
    isInitialised: false
}


/*

    ACTION TYPES

 */
const SET_INITIALISED = "SET_INITIALISED"


/*

    ACTION CREATORS

 */
const setInitialised = (isInitialised) => {
    return {
        type: SET_INITIALISED, isInitialised
    }
}

/*

    THUNK

 */
export const initialiseApp = () => {
    return (dispatch) => {
        const promise = dispatch(checkAuth())
        Promise.all([promise])
            .then(() => {
                dispatch(setInitialised(true))
            })
    }
}

/*

    REDUCER

 */
export const appReducer = (state = initial_state, action) => {
    switch (action.type) {

        case(SET_INITIALISED): {
            return {
                ...state, isInitialised: action.isInitialised
            }
        }

        default:
            return state
    }
}