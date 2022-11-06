import PostCSS from './Post.module.css';

const Post = (props) => {
    return(
        <div className={PostCSS.item}>

            <div className={PostCSS.post_info}>

                <div className={PostCSS.avatar}>
                    <img src='avatar.png' alt=""/>
                </div>

                <div className={PostCSS.post}>

                    <div className={PostCSS.name}>{props.name}</div>
                    <div className={PostCSS.text}>{props.text}</div>

                </div>

            </div>

            <div className={PostCSS.like_dislike}>
                <button>Like</button>
            </div>

            <div className={PostCSS.like_count}>
                likes: {props.likes}
            </div>

        </div>

    );
}

export default Post;