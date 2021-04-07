import React from 'react';
import Dialogs from "./Dialogs";
import {dialogsPageType} from "../../typeAll";
import {sendMessageCreate, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    state: dialogsPageType
}
type mapDispatchToProps = {
    onSendMessageClick: () => void,
    onNewMessageChange: (body:string) => void
}

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return{
        onSendMessageClick: () => {
            dispatch(sendMessageCreate())
        },
        onNewMessageChange: (body:string ) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer
