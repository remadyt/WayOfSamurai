import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow} from "../../redux/user-reducer";
import {UserType} from "../../typeAll";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { UserApi} from "../../api/api";

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
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UserApi.getUsers().then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        UserApi.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {
                this.props.isFetching ? <Preloader /> : null
            }
            <Users
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
        </>
    }
}

type mapStatePropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalCount,toggleIsFetching

})(UsersContainer)