import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { RootStateType} from "../../redux/state";

type PropsType = {
    state: RootStateType
    addPost: () => void
    newPostText: (newText: string) => void
}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo  />
            <MyPosts state={props.state} addPost={props.addPost} newPostText={props.newPostText}   />
        </div>
    )
}
export default Profile;

