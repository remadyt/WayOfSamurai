import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/user-reducer";



let mapStateToProps  = (state:AppStateType) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (Users)