import PostCSS from './Post.module.css';

const Post = (props) => {
    return(
        <div className={PostCSS.item}>
            <img src='avatar.png' />
            {props.text}
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>

            <div className={PostCSS.like_text}>
                likes: {props.likes}
            </div>

        </div>

    );
}

export default Post;