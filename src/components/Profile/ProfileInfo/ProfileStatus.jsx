import ProfileInfoCSS from './ProfileInfo.module.css'
import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render(){
        return (<>
                {(!this.state.editMode || (this.props.myID !== this.props.id)) &&
                    <div className={ProfileInfoCSS.description}>
                        <span onDoubleClick={this.toggleEditMode}>
                            {this.props.lookingForAJobDescription === null ? "Empty description" : this.props.lookingForAJobDescription}
                        </span>
                    </div>
                }

                {this.state.editMode && (this.props.myID === this.props.id) &&
                    <div className={ProfileInfoCSS.description}>
                        <input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.lookingForAJobDescription === null ? "Empty description" : this.props.lookingForAJobDescription}/>
                    </div>
                }
            </>

        )
    }

}

export default ProfileStatus