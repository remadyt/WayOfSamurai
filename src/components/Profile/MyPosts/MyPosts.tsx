import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {RootStateType} from "../../../redux/state";

type PropsType = {
    state: RootStateType
}
const MyPosts = (props:PropsType) => {
    let postsItem = props.state.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likeCounts}/>)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div className={s.textBlock}>
                    <textarea>123</textarea>
                </div>
                <div className={s.btnBlock}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItem}
            </div>
        </div>
    )

}

export default MyPosts;