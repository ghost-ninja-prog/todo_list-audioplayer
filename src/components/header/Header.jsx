import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
    <>
        <header className={style.header}>
            <nav className={style.navigation}>
                <div>
                    <Link to={'/'}>
                        <h3 className={style.navigationLogo}>Logo</h3>
                    </Link>
                </div>
                <ul className={style.navigationLinks}>
                    <li className={style.navigationItem}>
                        <Link to={'/home'} className={style.navigationLink}>Home</Link>
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
                    <li>
                        <Link to={'/audioplayer'} className={style.navigationLink}>Audioplayer</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}
