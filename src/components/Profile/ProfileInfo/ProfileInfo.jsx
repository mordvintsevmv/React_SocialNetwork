import ProfileInfoCSS from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={ProfileInfoCSS.back}>
                <img src='forest.jpg'/>
            </div>

            <div>
                Avatar + Description
            </div>

        </div>
    )
}

export default ProfileInfo;