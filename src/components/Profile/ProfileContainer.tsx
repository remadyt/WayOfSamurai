import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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
    status: string
}

type MatchParams = {
    userId: string,

}

type OwnParams = mapSateToPropsType
type PropsType = {
        getUserProfile: (userId: string) => void
        getUserStatus: (userId: string) => void
        updateUserStatus: (status: string) => void
        isAuth: boolean
    }
    & RouteComponentProps<MatchParams>
    & OwnParams


class ProfileContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '13516'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}


let mapStateToProps = (state: AppStateType): mapSateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //WithAuthRedirect
)(ProfileContainer)

