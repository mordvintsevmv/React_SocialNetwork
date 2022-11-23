/*

    INITIAL STATE

 */
import {serverLoadProfile, serverLoadStatus, serverUpdateStatus, serverUploadPhoto} from "../api/api";

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
const DELETE_POST = "DELETE_POST"
const SET_PHOTOS = "SET_PHOTOS"


/*

    ACTION CREATORS

 */
export const addPost = (text) => {
    return {
        type: ADD_POST,
        text
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
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

export const setPhoto = (photos) => {
    return {
        type: SET_PHOTOS,
        photos
    }
}


/*

    THUNK

 */
export const loadProfile = (userID) => async (dispatch) => {
    const response = await serverLoadProfile(userID)
    dispatch(setProfile(response))

}

export const loadStatus = (userID) => async (dispatch) => {
    const response = await serverLoadStatus(userID)
    dispatch(setStatus(response))

}

export const updateStatus = (status) => async (dispatch) => {
    const response = await serverUpdateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export const updatePhoto = (file) => async (dispatch) => {
    const response = await serverUploadPhoto(file)
    if (response.resultCode === 0) {
        dispatch(setPhoto(response.data))
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

        case(DELETE_POST): {
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.id)
            }
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

        case(SET_PHOTOS): {
            return {
                ...state,
                photos: {
                    small: action.photos.small,
                    large: action.photos.large
                }
            }
        }

        default: {
            return state;
        }

    }
}