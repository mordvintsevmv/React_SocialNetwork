import React from 'react'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../storeContext";

const MyPostsContainer = () => {

    return(
        <StoreContext.Consumer>{
            (store) => {
                    let postChange = (text) => {
                        store.dispatch(onPostChangeActionCreator(text));
                    }

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    return (
                        <MyPosts
                            postChange={postChange}
                            addPost={addPost}
                            postData={store.getState().profilePage.postData}
                            currentPost={store.getState().profilePage.currentPost}/>)
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;