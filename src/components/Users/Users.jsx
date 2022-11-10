import UserItem from "./UserItem/UserItem";
import axios from "axios";
import React from "react";
import UsersCSS from './Users.module.css'

const Users = (props) => {

    let setUsers = (page=1,count=5) => {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`).then(r => {
                props.onSetUsers(r.data.items.map(el => {
                        return ({
                            ...el,
                            location: {
                                country: "USA",
                                city: "Boston"
                            },
                            status: "My description!",

                        })

                    }
                ), r.data.totalCount, page)
            })
    }

    if (props.userPage.users.length === 0){
        setUsers();
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


    let pageCount = Math.ceil(props.userPage.totalUsersCount / props.userPage.pageSize)

    let pages = []

    for (let i = props.userPage.currentPage; i > props.userPage.currentPage - 3; i--) {
        if (i < 1) break
        pages.unshift(i)
    }

    if (props.userPage.currentPage > 3){
        pages.unshift("...")
        pages.unshift(1);
    }

    for (let i = props.userPage.currentPage + 1; i < props.userPage.currentPage + 3; i++) {
        if (i > pageCount) break
        pages.push(i)
    }

    if (props.userPage.currentPage < (pageCount - 3)){
        pages.push("...")
        pages.push(pageCount);
    }

    return (
        <div>
            {userElement}
            <div className={UsersCSS.page_buttons}>
                {

                    pages.map( el =>  {
                        if (el === "..."){
                            return <span className={UsersCSS.dots}>...</span>
                        } else{
                        return <span
                            onClick={() => {setUsers(el,5)}}
                            className={
                            el === props.userPage.currentPage ? UsersCSS.current_page : UsersCSS.inactive_page
                            }
                        >
                            {el}
                        </span>
                    }})
                    }
            </div>
        </div>
    )
}

export default Users;