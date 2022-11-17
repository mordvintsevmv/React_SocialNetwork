import ProfileInfoCSS from './ProfileInfo.module.css'
import React, {useState} from "react";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }

    const activateEditMode = () => {
        setStatus(props.status)
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onEnter = (event) => {
        if (event.keyCode === 13) {
            deactivateEditMode();
        }
    }

    return (<>
            {(!editMode || (props.myID !== props.id)) && <div className={ProfileInfoCSS.description}>
                        <span >
                            {props.status === null ? "" : props.status}
                        </span>
                <span className={ProfileInfoCSS.edit_button}>
                    <img src={"https://cdn0.iconfinder.com/data/icons/back-to-school/90/circle-school-learn-study-subject-math-pencil-edit-1024.png"} onClick={activateEditMode} alt={"edit"}/>
                </span>
            </div>}

            {editMode && (props.myID === props.id) && <div className={ProfileInfoCSS.description}>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       onKeyDown={onEnter}
                       value={status === null ? "" : status}/>
            </div>}
        </>

    )
}


export default ProfileStatus