import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/4/45/Notion_app_logo.png" alt="logo"/>
        </header>
    )
}

export default Header