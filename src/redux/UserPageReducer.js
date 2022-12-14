import {serverFollow, serverGetUsers, serverUnfollow} from "../api/api";


/*

    INITIAL STATE

 */
let initial_state = {
    users: [], pageSize: 5, totalUsersCount: 0, currentPage: 1, isFollowingProgress: []
}

/*

   ACTION TYPES

*/
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USER = "SET_USER"
const SET_TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


/*

    ACTION CREATORS

 */
export const onFollow = (id) => ({type: FOLLOW, id: id})
export const onUnfollow = (id) => ({type: UNFOLLOW, id: id})
export const onSetUsers = (users) => ({type: SET_USER, users: users})
export const onSetTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount
})
export const onSetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const onToggleIsFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID
})


/*

    THUNK

 */
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

    const response = await serverGetUsers(currentPage, pageSize)

    dispatch(onSetUsers(response.items.map(el => {
        return ({
            ...el, location: {
                country: "USA", city: "Boston"
            }, status: "My description!",
        })
    })))
    dispatch(onSetTotalUsersCount(response.totalCount))
    dispatch(onSetCurrentPage(currentPage))

}

export const follow = (id) => async (dispatch) => {
    dispatch(onToggleIsFollowingProgress(true, id))

    const response = await serverFollow(id)

    if (response.resultCode === 0) {
        dispatch(onFollow(id));
    }

    dispatch(onToggleIsFollowingProgress(false, id))
}

export const unfollow = (id) => async (dispatch) => {
    dispatch(onToggleIsFollowingProgress(true, id))

    const response = await serverUnfollow(id)

    if (response.resultCode === 0) {
        dispatch(onUnfollow(id));
    }

    dispatch(onToggleIsFollowingProgress(false, id))

}


/*

    REDUCER

 */
export const userPageReducer = (state = initial_state, action) => {

    switch (action.type) {
        case(FOLLOW): {
            return {
                ...state, users: [...state.users].map(user => {
                    if (action.id === user.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }

        case(UNFOLLOW): {
            return {
                ...state, users: [...state.users].map(user => {
                    if (action.id === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }

        case(SET_USER): {
            return {
                ...state, users: [...action.users]
            }
        }

        case(SET_TOTAL_USERS_COUNT): {
            return {
                ...state, totalUsersCount: action.totalUsersCount,
            }
        }

        case(SET_CURRENT_PAGE): {
            return {
                ...state, currentPage: action.currentPage
            }
        }

        case(TOGGLE_IS_FOLLOWING_PROGRESS): {
            return {
                ...state,
                isFollowingProgress: action.isFetching ? [...state.isFollowingProgress, action.userID] : state.isFollowingProgress.filter(id => id !== action.userID),
            }
        }

        default: {
            return state
        }
    }
}