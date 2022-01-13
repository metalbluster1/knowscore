import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import HeaderLogin from './HeaderLogin'
import HeaderLoggedOut from './HeaderLoggedOut'
import ClientLogin from './ClientLogin'

import StateContext from '../StateContext'

function Header(props) {

    // const { setLoginToken } = useContext(ExampleContext)
    // const { setLoggedIn } = useContext(ExampleContext)
    // const { loggedIn } = useContext(ExampleContext)
    // const [loggedIn, setLoggedIn] = useState(false)

    const appState = useContext(StateContext)


    // useEffect(() => {
    //     if ((localStorage.getItem("logintoken"))) {
    //         const loginData = localStorage.getItem("logintoken")
    //         if (!loginData.userName) {
    //             setLoggedIn(true)
    //         }
    //         else setLoggedIn(false)

    //     }
    //     else {
    //         setLoggedIn(false)
    //     }
    // }, [])





    return (
        <>
            <header>
                <div className="main-header">
                    <div id="header" className="container">
                        <h1 className="header">LOCAL CRICKET</h1>
                    </div>
                    {appState.loggedIn ? <HeaderLogin /> : <HeaderLoggedOut />}
                </div>
            </header>
        </>
    )

}

export default Header