import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow} from "../../redux/user-reducer";
import {UserType} from "../../typeAll";
import axios from "axios";
import Users from "./Users";

type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

class UsersContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            console.log(response.data)
        })
    }

    render() {

        return <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageSize={this.props.pageSize}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            setTotalCount={this.props.setTotalCount}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}

        />

    }
}

type mapStatePropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}


let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalCount
})(UsersContainer)