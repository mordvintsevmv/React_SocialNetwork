import ProfileInfoCSS from "./ProfileInfo.module.css";
import forest from '../../../img/forest.jpg'
import avatar from '../../../img/avatar.png'

const ProfileInfo = () => {
    return (
        <div className={ProfileInfoCSS.info_wrapper}>

            <div className={ProfileInfoCSS.back}>
                <img src={forest} alt=""/>
            </div>

            <div className={ProfileInfoCSS.info_block}>
                <img className={ProfileInfoCSS.avatar} src={avatar} alt=""/>
                <div className={ProfileInfoCSS.text_info}>
                    <div className={ProfileInfoCSS.name}>Name Lastname</div>
                    <div className={ProfileInfoCSS.description}>Description</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;