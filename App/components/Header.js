import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SideBarData'


function Header() {

    // const [sideBarmenu, setSideBarMenu] = useState([false])
    // const showSidebar = () => setSideBarMenu(!sideBarmenu)

    return (
        <>
            <header>
                <div className="main-header">
                    <div id="header" className="container">
                        <h1 className="header">LOCAL CRICKET</h1>
                    </div>
                    <div className="client-header">
                        <ul>
                            <Link className="login client" to="/loginpage">Login</Link>
                            <Link className="signup client" to="/signinpage">SignUp</Link>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header