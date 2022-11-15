import ProfileInfoCSS from "./ProfileInfo.module.css";
import forest from '../../../img/forest.jpg'
import avatar from '../../../img/avatar.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    return (<div className={ProfileInfoCSS.info_wrapper}>

        <div className={ProfileInfoCSS.back}>
            <img src={forest} alt=""/>
        </div>

        <div className={ProfileInfoCSS.info_block}>
            <img className={ProfileInfoCSS.avatar}
                 src={props.profile.photos.small ? props.profile.photos.small : avatar} alt=""/>
            <div className={ProfileInfoCSS.text_info}>
                <div className={ProfileInfoCSS.name}>{props.profile.fullName}</div>
                <ProfileStatus lookingForAJobDescription={props.profile.lookingForAJobDescription} status={props.profile.status} myID={props.myID} id={props.profile.userId} updateStatus={props.updateStatus}/>
            </div>
        </div>

    </div>)
}

export default ProfileInfo;