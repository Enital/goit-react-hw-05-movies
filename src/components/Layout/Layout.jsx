import { NavLink, Outlet } from "react-router-dom";

import css from './layout.module.css'

export const Layout = () => {
    return (
        <div>
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
        
            <main>
                <Outlet />
            </main>
        </div>
    )
};