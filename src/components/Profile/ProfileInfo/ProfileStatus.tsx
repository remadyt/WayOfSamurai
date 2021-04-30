import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        title: '123'
    }
    activeEditMode () {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode () {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {   !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activeEditMode.bind(this)}>status</span>
                        </div>
                        : <div>
                            <input autoFocus onBlur={this.deactivatedEditMode.bind(this)} value="status" type='text'/>
                        </div>
                }
            </div>

        );
    }
}

export default ProfileStatus;