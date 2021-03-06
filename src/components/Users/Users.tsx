import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/large.jpg";
import {UserType} from "../../typeAll";
import {NavLink} from 'react-router-dom';


type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>

}

const Users = (props: PropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return (
        <div>
            <div>
                {page.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? styles.bold : styles.def}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.large : userPhoto} alt="#"
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }
                                }>Follow</button>}
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
    );
};

export default Users;