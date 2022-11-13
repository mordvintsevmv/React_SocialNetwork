import UsersCSS from "./Users.module.css";
import React from "react";

let Users = (props) => {

    let pageCount = Math.ceil(props.userPage.totalUsersCount / props.userPage.pageSize)

    let pages = []

    for (let i = props.userPage.currentPage; i > props.userPage.currentPage - 3; i--) {
        if (i < 1) break
        pages.unshift(i)
    }

    if (props.userPage.currentPage > 3) {
        pages.unshift("...")
        pages.unshift(1);
    }

    for (let i = props.userPage.currentPage + 1; i < props.userPage.currentPage + 3; i++) {
        if (i > pageCount) break
        pages.push(i)
    }

    if (props.userPage.currentPage < (pageCount - 3)) {
        pages.push("...")
        pages.push(pageCount);
    }

    return (
        <div>
            {props.userElement}
            <div className={UsersCSS.page_buttons}>
                {
                    pages.map(el => {
                        if (el === "...") {
                            return <span className={UsersCSS.dots} key={0}>...</span>
                        } else {
                            return <span
                                onClick={() => {
                                    props.setUsers(el, 5)
                                }}
                                className={
                                    el === props.userPage.currentPage ? UsersCSS.current_page : UsersCSS.inactive_page
                                }
                                key={el.id}
                            >
                            {el}
                        </span>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Users;