import React from 'react';
import Dialogs from "../Dialogs";
import {StoreType} from "../../../typeAll";
import {sendMessageCreate, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";

type PropsType = {
    store:StoreType
}

function DialogsContainer (props:PropsType) {
    const state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreate())
    }
    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs state={state} onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}/>
    )
}
export default DialogsContainer
