import React from 'react';
import MyPosts from "../MyPosts";
import {StoreType} from "../../../../typeAll";
import {addPostCreate, newPostCreate} from "../../../../redux/profile-reducer";


type PropsType = {
    store: StoreType

}

const MyPostsContainer = (props: PropsType) => {
    const state = props.store.getState().profilePage

    let addPost = () => {
            props.store.dispatch(addPostCreate())

    }
    let onPostChange = (text: string) => {
        props.store.dispatch(newPostCreate(text))


    }
    return (
        <MyPosts state={state} onPostChange={onPostChange} addPost={addPost}/>
    )
}
export default MyPostsContainer;