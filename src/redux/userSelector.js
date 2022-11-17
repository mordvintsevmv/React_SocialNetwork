import {createSelector} from "@reduxjs/toolkit";

export const getIsFollowingProgress = (state) => {
    return state.userPage.isFollowingProgress
}

export const getCurrentPage = (state) =>{
    return state.userPage.currentPage
}

export const getUsers = (state) =>{
    return state.userPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getTotalUsersCount = (state) =>{
    return state.userPage.totalUsersCount
}

export const getPageSize = (state) =>{
    return state.userPage.pageSize
}
