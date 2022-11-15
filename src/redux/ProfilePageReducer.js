/*

    INITIAL STATE

 */
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
        userId: null,
        lookingForAJob: null,
        lookingForAJobDescription: "My description!",
        fullName: "Maksim Mordvintsev",
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
const ADD_POST = "ADD-POST"
const EDIT_CURRENT_POST = "EDIT-CURRENT-POST"
const SET_PROFILE = "SET-PROFILE"


/*

    ACTION CREATORS

 */
export const addPost = () => {
    return {
        type: ADD_POST
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


/*

    THUNK

 */



/*

    REDUCER

 */
export const profilePageReducer = (state = initial_state, action) => {


    switch (action.type){
        case(ADD_POST): {

            return {
                ...state,

                postData: [...state.postData,

                    {
                        id: state.postData.at(-1).id + 1,
                        name: "Polina",
                        text: state.currentPost.text,
                        likes: 0
                    }

                ],

                currentPost:
                    {
                        text: "",
                    }

            };
        }

        case(EDIT_CURRENT_POST):{

            return {
                ...state,
                currentPost: {
                    text: action.currentText
                }
            };
        }

        case(SET_PROFILE):{
            return {
                ...state,
                profile: {...action.profile}
            };
        }

        default:{
            return state;
        }

    }
}