import UserItem from "./UserItem/UserItem";
import axios from "axios";
import React from "react";

const Users = (props) => {

    let getUsers = () => {
        if (props.userPage.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => {
                props.onSetUsers(r.data.items.map(
                    el => {
                        return ({
                            ...el,
                            location: {
                                country: "USA",
                                city: "Boston"
                            },
                            status: "My description!",

                        })

                    }
                ))
            })

        }
    }


    let userElement = props.userPage.users.map(
        (el) => <UserItem
            key={el.id}
            id={el.id}
            name={el.name}
            status={el.status}
            smallPhoto={el.photos.small}
            largePhoto={el.photos.large}
            followed={el.followed}
            country={el.location.country}
            city={el.location.city}
            onFollow={props.onFollow}
            onUnfollow={props.onUnfollow}
        />
    )

    return (
        <div>
            {userElement}
            <button onClick={getUsers}>Get Users</button>
        </div>
    )
}

export default Users;