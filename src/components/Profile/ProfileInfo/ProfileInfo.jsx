import ProfileInfoCSS from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={ProfileInfoCSS.info_wrapper}>

            <div className={ProfileInfoCSS.back}>
                <img src='forest.jpg' alt=""/>
            </div>

            <div className={ProfileInfoCSS.info_block}>
                <img className={ProfileInfoCSS.avatar} src="avatar.png" alt=""/>
                <div className={ProfileInfoCSS.text_info}>
                    <div className={ProfileInfoCSS.name}>Name Lastname</div>
                    <div className={ProfileInfoCSS.description}>Description</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;