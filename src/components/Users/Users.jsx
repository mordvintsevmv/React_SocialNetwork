import UsersCSS from "./Users.module.css";
import React from "react";
import UserItem from "./UserItem/UserItem";

let Users = (props) => {

    if (props.totalUsersCount === 0) {
        props.getUsers(1, 5)
    }

    const userElement = props.users.map((user) => {

        return <UserItem
            user={user}
            key={user.id}
            myID={props.myID}
            follow={props.follow}
            unfollow={props.unfollow}
            isFollowingProgress={props.isFollowingProgress}
        />
    })

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = props.currentPage; i > props.currentPage - 3; i--) {
        if (i < 1) break
        pages.unshift({el:i,key:i})
    }

    if (props.currentPage > 3) {
        pages.unshift({el:"...",key:"left"})
        pages.unshift({el:1,key:1});
    }

    for (let i = props.currentPage + 1; i < props.currentPage + 3; i++) {
        if (i > pageCount) break
        pages.push({el:i,key:i})
    }

    if (props.currentPage < (pageCount - 3)) {
        pages.push({el:"...",key:"right"})
        pages.push({el:pageCount,key:pageCount});
    }

    return (
        <div>
            {userElement}
            <div className={UsersCSS.page_buttons}>
                {
                    pages.map(p => {
                        if (p.el === "...") {
                            return <span className={UsersCSS.dots} key={p.key}>...</span>
                        } else {
                            return <span
                                onClick={() => {
                                    props.getUsers(p.el, 5)
                                }}
                                className={
                                    p.el === props.currentPage ? UsersCSS.current_page : UsersCSS.inactive_page
                                }
                                key={p.key}
                            >
                            {p.el}
                        </span>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Users;