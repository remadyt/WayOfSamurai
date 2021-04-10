import axios from 'axios';
import React from 'react';
import {UserType} from "../../typeAll";
import styles from './Users.module.css'
import userPhoto from '../../assets/large.jpg'



type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsersAC: (users: UserType[]) => void
}


class Users extends React.Component<PropsType, {  }> {
    constructor(props: PropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsersAC(response.data.items)
        })
    }

    render() {
        return <div>
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