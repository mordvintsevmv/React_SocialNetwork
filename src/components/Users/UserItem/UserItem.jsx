import UserItemCSS from './UserItem.module.css'
import avatar from '../../../img/avatar.png'
import React from "react";
import {NavLink} from "react-router-dom";

const UserItem = (props) => {

    return (<div className={UserItemCSS.user_item_wrapper}>

        <div className={UserItemCSS.left_wrapper}>

            <div className={UserItemCSS.avatar}>
                <NavLink to={"/profile/" + props.user.id}>
                    <img src={props.user.photos.small === null ? avatar : props.user.photos.small} alt=""/>
                </NavLink>
            </div>

            <div className={UserItemCSS.followed}>
                {props.myID === props.user.id ? null : props.user.followed ?
                    <button value={props.user.followed} onClick={() => props.unfollow(props.user.id)}
                            disabled={props.isFollowingProgress.some(id => id === props.user.id)}>Unfollow</button> :
                    <button value={props.user.followed} onClick={() => props.follow(props.user.id)}
                            disabled={props.isFollowingProgress.some(id => id === props.user.id)}>Follow</button>}
            </div>


        </div>

        <div className={UserItemCSS.right_wrapper}>

            <div className={UserItemCSS.full_name}>
                <NavLink to={"/profile/" + props.user.id}>
                    {props.user.name}
                </NavLink>
            </div>

            <div className={UserItemCSS.location}>
                {props.country === undefined ? "USA" : props.country},
                {props.city === undefined ? "Boston" : props.city}
            </div>

            <div className={UserItemCSS.status}>
                {props.user.status}
            </div>

        </div>

    </div>)
}

export default UserItem;