import React from 'react'
import { Link } from 'react-router-dom'


function Navigation() {
    return (
        < nav id="main-nav" className="main-nav" >
            <div id="nav" className="container">
                <ul>
                    <Link className="nav-li" id="live-information" to="/live">Live</Link>
                    <Link className="nav-li" id="upcoming-information" to="/upcoming">Upcoming</Link>
                    <Link className="nav-li" id="recent-information" to="/recent">Recent</Link>
                </ul>
            </div>

        </nav >
    )
}

export default Navigation