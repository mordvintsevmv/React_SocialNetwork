import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/UserPageReducer";
import Users from "./Users";
import {compose} from "redux";
import {getCurrentPage, getIsFollowingProgress, getTotalUsersCount, getPageSize, getUsers} from "../../redux/userSelector";
import {getId} from "../../redux/authSelector";

let mapStateToProps = (state) => {
    return ({
        currentPage: getCurrentPage(state),
        isFollowingProgress: getIsFollowingProgress(state),
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        myID: getId(state),
    })
}

let objectDispatchToProps = {
    follow,
    unfollow,
    getUsers: requestUsers
}

export default compose(connect(mapStateToProps, objectDispatchToProps))(Users);