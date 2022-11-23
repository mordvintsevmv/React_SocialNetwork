import {connect} from "react-redux";
import Profile from './Profile'
import {loadProfile, loadStatus, updateStatus, updatePhoto} from "../../redux/ProfilePageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage,
        myID: state.auth.id
    })
}

let mapDispatchToProps = {
    loadProfile,
    loadStatus,
    updateStatus,
    updatePhoto

}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Profile);