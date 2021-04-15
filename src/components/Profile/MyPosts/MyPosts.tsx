import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {profilePageType} from "../../../typeAll";



type PropsType = {
    addPost: () => void
    newPost: (text:string) => void
    state: profilePageType
}

const MyPosts = (props: PropsType) => {
    let postsItem = props.state.posts.map(p => <Post message={p.message} likesCount={p.likeCounts}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.newPost(text)
        }
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div className={s.textBlock}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}/>
                </div>
                <div className={s.btnBlock}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItem}
            </div>
        </div>
    )
}
export default MyPosts;