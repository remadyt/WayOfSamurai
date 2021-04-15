import React from 'react';
import Dialogs from "./Dialogs";
import {dialogsPageType} from "../../typeAll";
import {sendMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";



type mapStateToPropsType = {
    state: dialogsPageType
}


const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
        state: state.dialogsPage
    }
}


const DialogsContainer = connect(mapStateToProps,{sendMessage, updateNewMessage})(Dialogs)
export default DialogsContainer
