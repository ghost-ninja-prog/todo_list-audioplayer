import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.navigation}>
                <div>
                    <h3 className={style.navigationLogo}>Logo</h3>
                </div>
                <ul className={style.navigationLinks}>
                    <li className={style.navigationItem}>
                        <Link to={'/'} className={style.navigationLink}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contacts"} className={style.navigationLink}>Contacts</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className={style.navigationLink}>About</Link>
                    </li>
                    <li>
                        <Link to={'/todolist'} className={style.navigationLink}>TodoList</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
