import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./Message/Message";

import {sendMessageCreate, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ActionsType, dialogsPageType, RootStateType} from "../../typeAll";

type PropsType = {
    state:dialogsPageType
    onSendMessageClick: () => void
    onNewMessageChange: (body:string) => void
}

function Dialogs (props:PropsType) {

    let dialogsElement = props.state.dialogs.map( d => <DialogItem name={d.name}  id={d.id} />)
    let messagesElement = props.state.messages.map (m => <MessageItem message={m.message} />)
    let newMessageBody = props.state.newMessageBody
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.onNewMessageChange(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder='Enter your message' >

                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
