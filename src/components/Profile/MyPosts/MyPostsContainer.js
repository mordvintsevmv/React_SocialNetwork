import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return({
        profilePage: state.profilePage
    })
}

let mapDispatchToProps = (dispatch) =>{
    return({
        postChange: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },

        addPost: () => {
            dispatch(addPostActionCreator())
        }
    })
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;