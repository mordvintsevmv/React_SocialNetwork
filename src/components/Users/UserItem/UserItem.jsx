import UserItemCSS from './UserItem.module.css'
import avatar from '../../../img/avatar.png'
import React from "react";

const UserItem = (props) => {

    let followButton = React.createRef()

    let onFollowChange = () =>{
        if (followButton.current.value === "false"){
            props.onFollow(props.id);
        } else{
            props.onUnfollow(props.id);
        }
    }

    return(
        <div className={UserItemCSS.user_item_wrapper}>

            <div className={UserItemCSS.left_wrapper}>

                <div className={UserItemCSS.avatar}>
                    <img src={props.smallPhoto != null ? props.smallPhoto : avatar} alt=""/>
                </div>

                <div className={UserItemCSS.followed}>
                    {
                        props.followed
                            ? <button  value={props.followed} onClick={onFollowChange} ref={followButton}>Unfollow</button>
                            : <button  value={props.followed} onClick={onFollowChange} ref={followButton}>Follow</button>
                    }

                </div>


            </div>

            <div className={UserItemCSS.right_wrapper}>

                <div className={UserItemCSS.full_name}>
                    {props.name}
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