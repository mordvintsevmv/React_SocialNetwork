import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/UserPageReducer";
import Users from "./Users";

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

const UsersContainer = connect(mapStateToProps, objectDispatchToProps)(Users);

export default UsersContainer;