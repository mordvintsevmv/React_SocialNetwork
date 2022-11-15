import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/UserPageReducer";
import Users from "./Users";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return ({
        userPage: state.userPage,
        isFollowingProgress: state.userPage.isFollowingProgress,
        myID: state.auth.id,
    })
}

let objectDispatchToProps = {
    follow,
    unfollow,
    getUsers
}

export default compose(connect(mapStateToProps, objectDispatchToProps))(Users);