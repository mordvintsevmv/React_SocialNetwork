import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/UserPageReducer";
import UserItem from "./UserItem/UserItem";
import Users from "./Users";
import React from "react";
import loadingGIF from '../../img/1481.gif'

let UsersAPI = (props) => {

    if (props.userPage.totalUsersCount === 0) {
        props.getUsers(1, 5)
    }

    const userElement = props.userPage.users.map((user) => {

        return <UserItem
            user={user}
            key={user.id}
            myID={props.myID}
            follow={props.follow}
            unfollow={props.unfollow}
            isFollowingProgress={props.isFollowingProgress}
        />
    })

    return (
        <>
            {
                props.userPage.isFetching ? <img src={loadingGIF} alt=""/> : null
            }
            <Users userElement={userElement} userPage={props.userPage} setUsers={props.getUsers}/>
        </>
    )
}

let mapStateToProps = (state) => {
    return ({
        userPage: state.userPage,
        isFollowingProgress: state.userPage.isFollowingProgress,
        myID: state.auth.id,
    })
}

let objectDispatchToProps = {
    follow,
    unfollow,
    getUsers
}

const UsersContainer = connect(mapStateToProps, objectDispatchToProps)(UsersAPI);

export default UsersContainer;