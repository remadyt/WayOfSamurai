import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {RootStateType} from "../../redux/state";

type PropsType = {
    state: RootStateType
}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo   />
            <MyPosts state={props.state}  />
        </div>
    )
}
export default Profile;

