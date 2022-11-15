import ProfileCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";

const Profile = (props) => {

    const {userID} = useParams();

    useEffect(() => {
        if (userID) {
            props.loadProfile(userID);
        }
    }, []);

    return (<div className={ProfileCSS.profile_wrapper}>
        <ProfileInfo profile={props.profilePage.profile}/>
        <MyPostsContainer/>
    </div>);
}

export default Profile;