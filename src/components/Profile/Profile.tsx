import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";



type PropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status:string) => void
}

const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo
                status={props.status}
                profile={props.profile}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    )


}
export default Profile;

