const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USER = "SET_USER"

let initial_state = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const userPageFollowActionCreator = (id) => ({type: FOLLOW, id: id})
export const userPageUnfollowActionCreator = (id) => ({type: UNFOLLOW, id: id})
export const userPageSetUserActionCreator = (users, totalUsersCount, currentPage) => ({type: SET_USER, users: users, totalUsersCount: totalUsersCount, currentPage: currentPage})


export const userPageReducer = (state = initial_state, action) =>{

    switch (action.type){
        case(FOLLOW):
        {
            let stateCopy = {
                ...state,
                users: [ ...state.users].map(user => {
                    if (action.id === user.id){
                        return {...user, followed: true}
                    }
                    return user
                })
            };

            return stateCopy
        }

        case(UNFOLLOW):
        {
            let stateCopy = {
                ...state,
                users: [ ...state.users].map(user => {
                    if (action.id === user.id){
                        return {...user, followed: false}
                    }
                    return user
                })
            };

            return stateCopy
        }

        case(SET_USER):
        {
            let stateCopy = {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount,
                currentPage: action.currentPage
            };

            return stateCopy
        }

        default:
        {
            return state
        }
    }
}