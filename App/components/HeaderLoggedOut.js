import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLoggedOut() {
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