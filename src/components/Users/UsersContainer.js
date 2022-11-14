import {connect} from "react-redux";
import {
    onFollow,
    onSetCurrentPage,
    onSetTotalUsersCount,
    onSetUsers,
    onToggleIsFetching,
    onUnfollow,
} from "../../redux/UserPageReducer";
import UserItem from "./UserItem/UserItem";
import Users from "./Users";
import React from "react";
import loadingGIF from '../../img/1481.gif'
import {serverGetUsers} from "../../api/api";

let UsersAPI = (props) => {

    let setUsers = (page = 1, count = 5) => {

        serverGetUsers(page,count).then(r => {
            props.onSetUsers(r.items.map(el => {
                return ({
                        ...el, location: {
                            country: "USA", city: "Boston"
                        }, status: "My description!",

                    }
                )

            }))
            props.onSetTotalUsersCount(r.totalCount)
            props.onSetCurrentPage(page)
        })


    }

    if (props.userPage.totalUsersCount === 0) {
        setUsers();
    }

    let userElement = props.userPage.users.map((el) => <UserItem
        key={el.id}
        id={el.id}
        myID={props.myID}
        name={el.name}
        status={el.status}
        smallPhoto={el.photos.small}
        largePhoto={el.photos.large}
        followed={el.followed}
        country={el.location.country}
        city={el.location.city}
        onFollow={props.onFollow}
        onUnfollow={props.onUnfollow}
    />)

    return (
        <>
            {
                props.userPage.isFetching ? <img src={loadingGIF} alt=""/> : null
            }
            <Users userElement={userElement} userPage={props.userPage} setUsers={setUsers}/>
        </>
    )
}

let mapStateToProps = (state) => {
    return ({
        userPage: state.userPage,
        myID: state.auth.id,
    })
}

let objectDispatchToProps = {
    onFollow,
    onUnfollow,
    onSetUsers,
    onSetTotalUsersCount,
    onSetCurrentPage,
    onToggleIsFetching,
}

const UsersContainer = connect(mapStateToProps, objectDispatchToProps)(UsersAPI);

export default UsersContainer;