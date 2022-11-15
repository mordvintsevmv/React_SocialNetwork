import {connect} from "react-redux";
import Profile from './Profile'
import {loadProfile} from "../../redux/ProfilePageReducer";

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage
    })
}

let mapDispatchToProps = {
    loadProfile
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;