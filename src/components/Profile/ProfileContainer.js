import {connect} from "react-redux";
import Profile from './Profile'
import {loadProfile} from "../../redux/ProfilePageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage
    })
}

let mapDispatchToProps = {
    loadProfile
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Profile);