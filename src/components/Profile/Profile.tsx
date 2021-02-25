import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, RootStateType, StoreType} from "../../typeAll";
import MyPostsContainer from "./MyPosts/Posts/MyPostsContainer";


type PropsType = {
    store:StoreType
}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileInfo  />
            <MyPostsContainer store={props.store} />
        </div>
    )


}
export default Profile;

