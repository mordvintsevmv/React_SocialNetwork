import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';
import React from 'react'

const MyPosts = (props) => {


    let postElements = props.profilePage.postData.map(el => <Post text={el.text} likes={el.likes} name={el.name}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        props.postChange(newPostElement.current.value);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return(
            <div className={MyPostsCSS.post_wrapper}>

                <h1>Your Wall</h1>

                <div>
                    <h4>New Post</h4>
                    <textarea ref={newPostElement} value={props.profilePage.currentPost.text} onChange={ onPostChange }/>
                    <button onClick={ onAddPost }>Post</button>
                </div>

                <div>
                    <h2>All Posts</h2>

                    {postElements}

                </div>
            </div>
    );
}

export default MyPosts;