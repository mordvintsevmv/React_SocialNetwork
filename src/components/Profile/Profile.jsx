import ProfileCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return(
        <div className={ProfileCSS.profile_wrapper}>
            <ProfileInfo />

            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;