import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {profilePageType} from "../../../typeAll";
import {addPostCreate, newPostCreate} from "../../../redux/profile-reducer";
import { Dispatch } from 'redux';


type mapStatePropsType = {
    state: profilePageType
}

type mapDispatchPropsType = {
    addPost: () => void
    onPostChange: (text:string) => void
}
const  mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        state: state.profilePage
    }
}
const  mapDispatchToProps = (dispatch:Dispatch):mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostCreate())
        },
        onPostChange: (text:string) => {
            dispatch(newPostCreate(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;