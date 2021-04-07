import React from 'react';
import {UserType} from "../../typeAll";
import styles from './Users.module.css'

type PropsType = {
    users: UserType[]
    follow: (userId:number) => void
    unfollow: (userId:number) => void


}

const Users = (props: PropsType) => {

    return <div>
        {

            props.users.map(u =>

                <div key={u.id}>

                    <span>
                        <div>
                            <img src={u.photoUrl} alt="#" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)} >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </div>)

        }

    </div>


};

export default Users;