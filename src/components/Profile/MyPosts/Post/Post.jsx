import PostCSS from './Post.module.css';

const Post = () => {
    return(
        <div className={PostCSS.item}>
            <img src='avatar.png' />
            Post 1
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>

        </div>

    );
}

export default Post;