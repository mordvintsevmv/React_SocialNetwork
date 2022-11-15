import ProfileInfoCSS from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
    return (<>
            <div className={ProfileInfoCSS.description}>
                {props.lookingForAJobDescription}
            </div>

            <div className={ProfileInfoCSS.description}>
                <input value={props.lookingForAJobDescription}/>
            </div>
        </>

    )
}

export default ProfileStatus