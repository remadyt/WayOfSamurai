import React from 'react';
import s from './../Dialogs.module.css'

type PropsType = {
    message: string
}
const MessageItem = (props:PropsType) => {
    return (
        <div className={s.message}>{props.message}
        </div>

    )
}


export default MessageItem
