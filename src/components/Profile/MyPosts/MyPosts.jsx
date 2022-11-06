import MyPostsCSS from './MyPosts.module.css';
import Post from'./Post/Post';

const MyPosts = (props) => {


    let postElements = props.postData.map(el => <Post text={el.text} likes={el.likes} name={el.name}/>)

    let addPost = () => {
        let text = document.getElementById("text-area").value;
        alert(text);
    }

    return(
            <div className={MyPostsCSS.post_wrapper}>

                <h1>Your Wall</h1>

                <div>
                    <h4>New Post</h4>
                    <textarea id="text-area"></textarea>
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