import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidenav-text'
    },
    {
        title: 'Upload',
        path: '/upload',
        icon: <FaIcons.FaFileUpload />,
        cName: 'sidenav-text'
    },
    {
        title: 'AboutUs',
        path: "/about",
        icon: <FaIcons.FaInfoCircle />,
        cName: 'sidenav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'sidenav-text'
    }
]