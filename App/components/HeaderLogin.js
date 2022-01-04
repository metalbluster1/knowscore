import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SideBarData'



function HeaderLogin(props) {

    const [sideBarmenu, setSideBarMenu] = useState([false])

    const showSidebar = () => setSideBarMenu(!sideBarmenu)

    function handlerLogout(e) {
        e.preventDefault()
        props.setLoggedIn(false)
        localStorage.removeItem("logintoken")
    }

    return (
        <header>
            <div className="main-header">
                <div className="client-header">
                    <ul>
                        <Link to="#" className="login client" >Name</Link>
                        <Link to='#' onClick={showSidebar} className="signupclient" ><i className='fas fa-ellipsis-h'></i></Link>
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
                        <button onClick={handlerLogout} className='logoutBtn'><span className='logoutIcon'><FaIcons.FaSignOutAlt /></span><span className='logoutText'>Logout</span></button>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default HeaderLogin