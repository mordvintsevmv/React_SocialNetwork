import {connect} from "react-redux";
import Users from './Users'
import {
    userPageUnfollowActionCreator,
    userPageFollowActionCreator,
    userPageSetUserActionCreator
} from "../../redux/UserPageReducer";


let mapStateToProps = (state) => {
    return({
        userPage: state.userPage,
    })
}

let mapDispatchToProps = (dispatch) => {
    return({
        onFollow: (id) =>{
            dispatch(userPageFollowActionCreator(id))
        },

        onUnfollow: (id) =>{
            dispatch(userPageUnfollowActionCreator(id))
        },

        onSetUsers: (users) =>{
            dispatch(userPageSetUserActionCreator(users))
        }

    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;