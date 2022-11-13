import {addPost, onPostChange} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return({
        profilePage: state.profilePage
    })
}

let mapDispatchToProps = {
    onPostChange,
    addPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;