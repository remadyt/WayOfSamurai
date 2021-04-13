import axios from 'axios';
import React from 'react';
import {UserType} from "../../typeAll";
import styles from './Users.module.css'
import userPhoto from '../../assets/large.jpg'



type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalCount: (totalCount:number) => void
    totalUsersCount: number
    pageSize: number
    currentPage:number
}


class Users extends React.Component<PropsType, {  }> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)

        })
    }
    onPageChanged =  (pageNumber:number) =>  {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            console.log(response.data)
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []
        for (let i=1;i <= pageCount;i++) {
            page.push(i)
        }

        return <div>
            <div>
                {page.map( p => {
                    return <span onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p ? styles.bold : styles.def}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.large : userPhoto} alt="#"
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </span>
                    </div>)

            }
        </div>

    }
}

export default Users;