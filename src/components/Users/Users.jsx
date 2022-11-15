import UsersCSS from "./Users.module.css";
import React from "react";
import UserItem from "./UserItem/UserItem";

let Users = (props) => {

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

    let pageCount = Math.ceil(props.userPage.totalUsersCount / props.userPage.pageSize)

    let pages = []

    for (let i = props.userPage.currentPage; i > props.userPage.currentPage - 3; i--) {
        if (i < 1) break
        pages.unshift({el:i,key:i})
    }

    if (props.userPage.currentPage > 3) {
        pages.unshift({el:"...",key:"left"})
        pages.unshift({el:1,key:1});
    }

    for (let i = props.userPage.currentPage + 1; i < props.userPage.currentPage + 3; i++) {
        if (i > pageCount) break
        pages.push({el:i,key:i})
    }

    if (props.userPage.currentPage < (pageCount - 3)) {
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
                                    p.el === props.userPage.currentPage ? UsersCSS.current_page : UsersCSS.inactive_page
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