const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USER = "SET_USER"
const SET_TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initial_state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const onFollow = (id) => ({type: FOLLOW, id: id})
export const onUnfollow = (id) => ({type: UNFOLLOW, id: id})
export const onSetUsers = (users) => ({type: SET_USER, users: users})
export const onToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const onSetTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount})
export const onSetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})


export const userPageReducer = (state = initial_state, action) => {

    switch (action.type) {
        case(FOLLOW): {
            let stateCopy = {
                ...state, users: [...state.users].map(user => {
                    if (action.id === user.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            };

            return stateCopy
        }

        case(UNFOLLOW): {
            let stateCopy = {
                ...state, users: [...state.users].map(user => {
                    if (action.id === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            };

            return stateCopy
        }

        case(SET_USER): {
            let stateCopy = {
                ...state,
                users: [...action.users]
            };

            return stateCopy
        }

        case(SET_TOTAL_USERS_COUNT): {
            let stateCopy = {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };

            return stateCopy
        }

        case(SET_CURRENT_PAGE): {
            let stateCopy = {
                ...state,
                currentPage: action.currentPage
            };

            return stateCopy
        }

        case(TOGGLE_IS_FETCHING): {
            let stateCopy = {
                ...state,
                isFetching: action.isFetching,
            };

            return stateCopy
        }

        default: {
            return state
        }
    }
}