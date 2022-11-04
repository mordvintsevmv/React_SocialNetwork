import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';

const MyPosts = () => {
    return(
            <div>
                Posts

                <div>
                    <p>New Post</p>
                    <textarea></textarea>
                    <button>Post</button>
                </div>

                <div>
                    All Posts

                    <Post content="First post"/>
                    <Post content="Interesting"/>
                    <Post content="Hi!"/>
                    <Post content="Bye!"/>
                </div>
            </div>
    );
}

export default MyPosts;