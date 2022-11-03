import ProfileCSS from './Profile.module.css';

const Profile = () => {
    return(
        <div className={ProfileCSS.content}>
            <div>
                <img src='forest.jpg'/>
            </div>

            <div>
                Avatar + Description
            </div>

            <div>
                Posts

                <div>
                    New Post
                </div>

                <div>
                    All Posts
                </div>
            </div>
        </div>
    );
}

export default Profile;