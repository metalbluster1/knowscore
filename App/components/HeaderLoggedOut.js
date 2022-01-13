import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import DispatchContext from '../DispatchContext'

function HeaderLoggedOut() {

    const appDispatch = useContext(DispatchContext)

    return (
        <header>
            <div className="main-header">
                <div className="client-header">
                    <ul>
                        <Link className="login client" to="/loginpage">Login</Link>
                        <Link className="signup client" to="/signinpage">SignUp</Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default HeaderLoggedOut