import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {profilePageType} from "../../../typeAll";
import {addPost, newPost} from "../../../redux/profile-reducer";



type mapStatePropsType = {
    state: profilePageType
}

const  mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        state: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps,{
    addPost,
    newPost
})(MyPosts)
export default MyPostsContainer;