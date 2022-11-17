import ProfileInfoCSS from './ProfileInfo.module.css'
import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false, status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true, status: this.props.status,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }

    onEnter = (event) => {
        if (event.keyCode === 13) {
            this.deactivateEditMode();
        }
    }

    render() {
        return (<>
                {(!this.state.editMode || (this.props.myID !== this.props.id)) &&
                    <div className={ProfileInfoCSS.description}>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status === null ? "" : this.props.status}
                        </span>
                    </div>}

                {this.state.editMode && (this.props.myID === this.props.id) &&
                    <div className={ProfileInfoCSS.description}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               onKeyDown={this.onEnter}
                               value={this.state.status === null ? "" : this.state.status}/>
                    </div>}
            </>

        )
    }

}

export default ProfileStatus