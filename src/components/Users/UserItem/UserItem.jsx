import UserItemCSS from './UserItem.module.css'
import avatar from '../../../img/avatar.png'
import React from "react";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {

    let followButton = React.createRef()

    let onFollowChange = () => {
        if (followButton.current.value === "false") {
            props.onFollow(props.id);
        } else {
            props.onUnfollow(props.id);
        }
    }

    return (
        <div className={UserItemCSS.user_item_wrapper}>

            <div className={UserItemCSS.left_wrapper}>

                <div className={UserItemCSS.avatar}>
                    <NavLink to={"/profile/" + props.id}>
                        <img src={props.smallPhoto != null ? props.smallPhoto : avatar} alt=""/>
                    </NavLink>
                </div>

                <div className={UserItemCSS.followed}>
                    {
                        props.followed
                            ?
                            <button value={props.followed} onClick={onFollowChange} ref={followButton}>Unfollow</button>
                            : <button value={props.followed} onClick={onFollowChange} ref={followButton}>Follow</button>
                    }

                </div>


            </div>

            <div className={UserItemCSS.right_wrapper}>

                <div className={UserItemCSS.full_name}>
                    <NavLink to={"/profile/" + props.id}>
                        {props.name}
                    </NavLink>
                </div>

                <div className={UserItemCSS.location}>
                    {props.country},
                    {props.city}
                </div>

                <div className={UserItemCSS.status}>
                    {props.status}
                </div>

            </div>

        </div>
    )
}

export default UserItem;