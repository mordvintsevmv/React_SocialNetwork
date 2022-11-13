import {connect} from "react-redux";
import Profile from './Profile'
import axios from "axios";
import {setProfile} from "../../redux/ProfilePageReducer";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const ProfileAPI = (props) => {

    const INITIAL_STATE = props.profilePage.profile

    const {userID} = useParams();

    const [profile, setProfile] = useState(INITIAL_STATE);

    useEffect(() => {
        if (userID){
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(r => {
                setProfile(r.data)
                props.setProfile(r.data)
            });
        } else{
            setProfile(profile)
            props.setProfile(profile)
        }
    }, [profile, props, userID]);


    return (<Profile profile={profile}/>)

}

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage
    })
}

let mapDispatchToProps = {
    setProfile
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPI);

export default ProfileContainer;