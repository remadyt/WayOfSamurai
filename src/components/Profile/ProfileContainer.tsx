import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink:string
}

export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type PropsType = {
    setUserProfile: (profile:ProfileType) => void
    profile: ProfileType

}
class ProfileContainer extends React.Component<PropsType, {}>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
            console.log(response)
        })
    }
    render () {
    return (
        <Profile {...this.props}  profile={this.props.profile} />
    )
}
}

type mapSateToPropsType = {
        profile: ProfileType
}

let mapStateToProps = (state: AppStateType):mapSateToPropsType => ({
        profile: state.profilePage.profile
})


export default connect(mapStateToProps, {
    setUserProfile,
}) (ProfileContainer)

