import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import HeaderLogin from './HeaderLogin'
import HeaderLoggedOut from './HeaderLoggedOut'
import ClientLogin from './ClientLogin'


function Header(props) {

    const [loggedIn, setLoggedIn] = useState()

    useEffect(() => {
        if ((localStorage.getItem("logintoken"))) {
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
    }, [])

    return (
        <>
            <header>
                <div className="main-header">
                    <div id="header" className="container">
                        <h1 className="header">LOCAL CRICKET</h1>
                    </div>
                    {loggedIn ? <HeaderLogin setLoggedIn={setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={setLoggedIn} />}
                </div>
            </header>
        </>
    )

}

export default Header