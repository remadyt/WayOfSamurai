import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./Message/Message";
import {RootStateType} from "../../redux/state";

type PropsType = {
    state: RootStateType
}

function Dialogs (props:PropsType) {
    let dialogsElement = props.state.dialogsPage.dialogs.map( d => <DialogItem name={d.name}  id={d.id} />)
    let messagesElement = props.state.dialogsPage.messages.map (m => <MessageItem message={m.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs
