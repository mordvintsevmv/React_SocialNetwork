import React from "react";
import axios from "axios";
import UserItem from "./UserItem/UserItem";

class UsersClass extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(r => {
            this.props.onSetUsers(r.data.items.map(
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



    render() {
        return(
            <div>
                <div>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                </div>

                {this.props.userPage.users.map(
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
                        onFollow={this.props.onFollow}
                        onUnfollow={this.props.onUnfollow}
                    />
                )}

            </div>
        )
    }
}

export default UsersClass;