import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {UserApi} from "../../api/api";

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}

type mapSateToPropsType = {
    profile: ProfileType
}
type mapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}
type MatchParams = {
    userId: string,
}

type PropsType = RouteComponentProps<MatchParams> & OwnParams
type OwnParams = mapSateToPropsType & mapDispatchToProps



class ProfileContainer extends React.Component<PropsType, {}> {

    //need fix
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state: AppStateType): mapSateToPropsType => ({
    profile: state.profilePage.profile

})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

