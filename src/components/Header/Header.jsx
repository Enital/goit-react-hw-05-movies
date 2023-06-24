import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './header.module.css';

function Header() {
    
    return (
        <header className={css.header}>
            <ul className={css.headerUl}>
                <li className={css.navItem}>
                    <NavLink to="/">
                        <span className={css.page}>Home</span>
                    </NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink to="/movies">
                        <span className={css.page}>Movies</span>
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header