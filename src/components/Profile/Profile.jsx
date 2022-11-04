import ProfileCSS from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div>
            <div className={ProfileCSS.back}>
                <img src='forest.jpg'/>
            </div>

            <div>
                Avatar + Description
            </div>

            <MyPosts />
        </div>
    );
}

export default Profile;