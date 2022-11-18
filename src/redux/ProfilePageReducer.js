/*

    INITIAL STATE

 */
import {serverLoadProfile, serverLoadStatus, serverUpdateStatus} from "../api/api";

let initial_state = {
    postData: [
        {id: 1, name: "Maksim", text: "First post", likes: 5},
        {id: 2, name: "Anton", text: "Interesting", likes: 10},
        {id: 3, name: "Maksim", text: "Hi!", likes: 47},
        {id: 4, name: "Sasha", text: "Bye!", likes: 0}],

    currentPost: {
        text: "",
    },

    profile: {
        aboutMe: null,
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        status: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null
        },
        photos: {
            small: null,
            large: null
        }
    }
}


/*

    ACTION TYPES

 */
const ADD_POST = "ADD_POST"
const EDIT_CURRENT_POST = "EDIT_CURRENT_POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"


/*

    ACTION CREATORS

 */
export const addPost = (text) => {
    return {
        type: ADD_POST,
        text
    }
}

export const onPostChange = (currentText) => {
    return {
        type: EDIT_CURRENT_POST,
        currentText
    }
}

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


/*

    THUNK

 */
export const loadProfile = (userID) => {
    return (dispatch) => {
        serverLoadProfile(userID).then(r => {
            dispatch(setProfile(r))
        })

    }
}

export const loadStatus = (userID) => {
    return (dispatch) => {
        serverLoadStatus(userID).then(r => {
            dispatch(setStatus(r))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        serverUpdateStatus(status).then(r => {
            if (r.resultCode === 0) {
                dispatch(setStatus(status))
            }
            }
        )
    }
}

/*

    REDUCER

 */
export const profilePageReducer = (state = initial_state, action) => {


    switch (action.type) {
        case(ADD_POST): {

            return {
                ...state,

                postData: [...state.postData,

                    {
                        id: state.postData.at(-1).id + 1,
                        name: "Polina",
                        text: action.text,
                        likes: 0
                    }

                ],

                currentPost:
                    {
                        text: "",
                    }

            };
        }

        case(EDIT_CURRENT_POST): {

            return {
                ...state,
                currentPost: {
                    text: action.currentText
                }
            };
        }

        case(SET_PROFILE): {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.profile
                }
            };
        }

        case(SET_STATUS): {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    status: action.status
                }
            }
        }

        default: {
            return state;
        }

    }
}