import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean,
    login: string | null
}
const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/4/45/Notion_app_logo.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}</div>
                    : <NavLink to='/login'>Login</NavLink>
                }
            </div>

        </header>
    )
}

export default Header