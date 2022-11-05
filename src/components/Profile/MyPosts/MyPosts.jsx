import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';

const MyPosts = (props) => {


    let postElements = props.postData.map(el => <Post text={el.text} likes={el.likes} name={el.name}/>)

    return(
            <div className={MyPostsCSS.post_wrapper}>

                <h1>Your Wall</h1>

                <div>
                    <h4>New Post</h4>
                    <textarea></textarea>
                    <button>Post</button>
                </div>

                <div>
                    <h2>All Posts</h2>

                    {postElements}

                </div>
            </div>
    );
}

export default MyPosts;