import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SideBarData'


function HeaderLogin() {

    const [sideBarmenu, setSideBarMenu] = useState([false])

    const showSidebar = () => setSideBarMenu(!sideBarmenu)

    return (
        <header>
            <div className="main-header">
                <div id="header" className="container">
                    <h1 className="header">LOCAL CRICKET</h1>
                </div>
                <div className="client-header">
                    <ul>
                        <Link className="login client">Name</Link>
                        <Link onClick={showSidebar} className="signupclient" ><i className='fas fa-ellipsis-h'></i></Link>
                    </ul>
                </div>
                <nav className={sideBarmenu ? 'sidenav-menu active' : 'sidenav'}>
                    <ul className='sidenav-items' onClick={showSidebar}>
                        <li className='sidebar-toggle'>
                            <Link onClick={showSidebar} to='#' className='side-bar'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span className='sidebar-icon'>{item.icon}</span>
                                        <span className='sidebar-items'>{item.title}</span>
                                    </Link>

                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default HeaderLogin