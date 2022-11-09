import ProfileCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

    return(
        <div className={ProfileCSS.profile_wrapper}>
            <ProfileInfo />

            <MyPostsContainer />
        </div>
    );
}

export default Profile;