import ProfileCSS from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return(
        <div className={ProfileCSS.profile_wrapper}>
            <ProfileInfo />

            <MyPosts postData={props.profilePage.postData} currentPost={props.profilePage.currentPost} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;