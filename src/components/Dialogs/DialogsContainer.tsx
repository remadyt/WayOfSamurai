import React from 'react';
import Dialogs from "./Dialogs";
import {dialogsPageType} from "../../typeAll";
import {sendMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";



type mapStateToPropsType = {
    state: dialogsPageType
    isAuth: boolean
}


const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = WithAuthRedirect(connect(mapStateToProps,{sendMessage, updateNewMessage})(Dialogs))
export default DialogsContainer
