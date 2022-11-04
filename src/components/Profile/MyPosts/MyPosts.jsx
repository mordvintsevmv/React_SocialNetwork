import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';

const MyPosts = () => {

    let postData = [
        {id: "1", text: "First post", likes: "5"},
        {id: "2", text: "Interesting", likes: "10"},
        {id: "3", text: "Hi!", likes: "47"},
        {id: "4", text: "Bye!", likes: "0"},
    ]

    let postElements = postData.map(el => <Post text={el.text} likes={el.likes}/>)

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

                    {postElements}

                </div>
            </div>
    );
}

export default MyPosts;