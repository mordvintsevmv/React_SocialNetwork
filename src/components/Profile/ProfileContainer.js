import {connect} from "react-redux";
import Profile from './Profile'
import {loadProfile} from "../../redux/ProfilePageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage, isAuth: state.auth.isAuth
    })
}

let mapDispatchToProps = {
    loadProfile
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Profile));

export default ProfileContainer;