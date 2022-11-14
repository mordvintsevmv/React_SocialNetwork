import UserItemCSS from './UserItem.module.css'
import avatar from '../../../img/avatar.png'
import React from "react";
import {NavLink} from "react-router-dom";
import {serverFollow, serverUnfollow} from "../../../api/api";

const UserItem = (props) => {

    let followButton = React.createRef()

    let onFollow = () => {
        serverFollow(props.id).then(r => {
            if (r.resultCode === 0) {
                props.onFollow(props.id);
            }
        })
    }

    const onUnfollow = () => {
        serverUnfollow(props.id).then(r => {
            if (r.resultCode === 0) {
                props.onUnfollow(props.id);
            }
        })
    }


    return (<div className={UserItemCSS.user_item_wrapper}>

        <div className={UserItemCSS.left_wrapper}>

            <div className={UserItemCSS.avatar}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.smallPhoto != null ? props.smallPhoto : avatar} alt=""/>
                </NavLink>
            </div>

            <div className={UserItemCSS.followed}>
                {props.myID === props.id ? null : props.followed ?
                    <button value={props.followed} onClick={onUnfollow} ref={followButton}>Unfollow</button> :
                    <button value={props.followed} onClick={onFollow} ref={followButton}>Follow</button>}
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

    </div>)
}

export default UserItem;