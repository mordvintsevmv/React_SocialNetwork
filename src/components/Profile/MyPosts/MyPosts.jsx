import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';
import React from 'react'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

const MyPosts = (props) => {


    let postElements = props.postData.map(el => <Post text={el.text} likes={el.likes} name={el.name}/>);

    let newPostElement = React.createRef();



    let onPostChange = () => {
        props.dispatch(onPostChangeActionCreator(newPostElement.current.value));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return(
            <div className={MyPostsCSS.post_wrapper}>

                <h1>Your Wall</h1>

                <div>
                    <h4>New Post</h4>
                    <textarea ref={newPostElement} value={props.currentPost.text} onChange={ onPostChange }/>
                    <button onClick={ addPost }>Post</button>
                </div>

                <div>
                    <h2>All Posts</h2>

                    {postElements}

                </div>
            </div>
    );
}

export default MyPosts;