import React, { useState, useEffect } from 'react'
import Axios from 'axios'


function ClientSignin() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    async function handleSubmit(e) {
        e.preventDefault()

    }


    return (
        <form onSubmit={handleSubmit}>
            <section id="live-information" className="information">
                <div className="live-matchs" id="live-matches">
                    <div className="match-1 match">
                        <ul className="login-page">
                            <li><h3>SignUp</h3></li>
                            <li>
                                <label className="client-label">FirstName</label>
                                <input value={firstName} onChange={e => setFirstName(e.target.value)} className="client-input" type="firstname" htmlFor="firstname"></input>
                            </li><li>
                                <label className="client-label">LastName</label>
                                <input value={lastName} onChange={e => setLastName(e.target.value)} className="client-input" type="lastname" htmlFor="lastname"></input>
                            </li>
                            <li>
                                <label className="client-label">Username</label>
                                <input value={userName} onChange={e => setUserName(e.target.value)} className="client-input" type="email" htmlFor="email" placeholder="Enter email"></input>
                            </li>
                            <li>
                                <label className="client-label">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} className="client-input" type="password" htmlFor="password" placeholder="password"></input>
                            </li>
                        </ul>
                        <button className="nav-li" id="live-information" className="btn score-btn">Submit</button>
                        {/* <Link className="nav-li" id="live-information" to="/"><button className="btn score-btn">Submit</button></Link> */}
                    </div>
                </div>
            </section>
        </form>
    )
}

export default ClientSignin