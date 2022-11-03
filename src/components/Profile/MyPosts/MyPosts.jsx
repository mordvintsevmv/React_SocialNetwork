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

                <div className={MyPostsCSS.item}>
                    All Posts

                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
    );
}

export default MyPosts;