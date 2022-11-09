import React from 'react'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let postChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    }

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return(
        <MyPosts postChange={postChange} addPost={addPost} postData={state.profilePage.postData} currentPost={state.profilePage.currentPost}/>
    );
}

export default MyPostsContainer;