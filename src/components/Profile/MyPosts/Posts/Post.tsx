import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number

}
const Post = (props:PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' alt={'logo'}/>
            {props.message}
            <div>
                <span>{'like ' + props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;