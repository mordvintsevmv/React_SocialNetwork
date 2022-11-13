import ProfileCSS from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (<div className={ProfileCSS.profile_wrapper}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>);
}

export default Profile;