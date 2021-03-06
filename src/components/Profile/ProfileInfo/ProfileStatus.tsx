import React, {ChangeEvent,KeyboardEvent} from 'react';


type PropsType = {
    status:string
    updateUserStatus: (status:string) => void
}

type prevPropsType = {
    status: string
}
class ProfileStatus extends React.Component<PropsType , {}> {
    state = {
        editMode:false,
        status: this.props.status
    }
    activeEditMode =  ()  => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () =>  {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    onKeyPressCallback = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            this.setState({
                editMode:false
            })
            this.props.updateUserStatus(this.state.status)
        }
    }

    componentDidUpdate(prevProps: prevPropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {   !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activeEditMode}>{this.props.status || 'Enter status'}</span>
                        </div>
                        : <div>
                            <input
                                autoFocus
                                onBlur={this.deactivatedEditMode}
                                value={this.state.status}
                                type='text'
                                onChange={this.onChangeCallback}
                                onKeyPress={this.onKeyPressCallback}
                            />
                        </div>
                }
            </div>

        );
    }
}

export default ProfileStatus;