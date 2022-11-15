import {connect} from "react-redux";
import Profile from './Profile'
import {loadProfile} from "../../redux/ProfilePageReducer";
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const ProfileAPI = (props) => {

    const {userID} = useParams();

    useEffect(() => {
        if (userID) {
            props.loadProfile(userID);
        }
    }, []);

    return (<Profile profile={props.profilePage.profile}/>)

}

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage
    })
}

let mapDispatchToProps = {
    loadProfile
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI);

export default ProfileContainer;