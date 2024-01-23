import React from 'react'
import { useRouteError } from 'react-router-dom'

import style from './style.module.css'
import Header from '../../components/Header/Header'

export default function ErrorPage() {
    
    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <Header />
            <div className={style.errorPage}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>Error {error.status}</i>
                </p>
                <p>
                    <i>{error.statusText}</i>
                </p>
            </div>
        </div>
    )
}
