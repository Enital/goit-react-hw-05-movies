import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './header.module.css';

function Header() {
    
    return (
        <header className={css.header}>
            <ul>
                <li>
                    <NavLink to="/">
                        <span className={css.page}>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies">
                        <span className={css.page}>Movies</span>
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header