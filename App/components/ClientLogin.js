import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function ClientLogin(props) {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function handleLoginSubmit(e) {
        e.preventDefault()
        props.setLoginToken(prev => prev.concat({ userName, password, id: Date.now() }))
        setUserName("")
        setPassword("")
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <section id="live-information" className="information">
                <div className="live-matchs" id="live-matches">
                    <div className="match-1 match">
                        <ul className="login-page">
                            <li><h3>Login</h3></li>
                            <li>
                                <label className="client-label">Username</label>
                                <input value={userName} onChange={e => setUserName(e.target.value)} className="client-input" type="email" htmlFor="email" placeholder="Enter email" required></input>
                            </li>
                            <li>
                                <label className="client-label">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} className="client-input" type="password" htmlFor="password" placeholder="password" required></input>
                            </li>
                        </ul>
                        <Link className="nav-li" id="live-information" to="/"><button className="btn score-btn">Submit</button></Link>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default ClientLogin