import React from 'react';
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                            onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;