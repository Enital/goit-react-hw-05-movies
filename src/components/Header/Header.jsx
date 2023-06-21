import React from 'react'
import { NavLink } from 'react-router-dom'

import css from './header.module.css';

function Header() {
    
    return (
        <header className={css.header}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
        </header>
    )
}

export default Header