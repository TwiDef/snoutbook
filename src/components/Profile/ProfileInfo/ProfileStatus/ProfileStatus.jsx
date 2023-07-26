import React from 'react';
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => { /* arrow fn avoid .bind() */
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => { /* arrow fn avoid .bind() */
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;