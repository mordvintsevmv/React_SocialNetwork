import PostCSS from './Post.module.css';

const Post = (props) => {
    return(
        <div className={PostCSS.item}>
            <img src='avatar.png' />
            {props.content}
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>

        </div>

    );
}

export default Post;