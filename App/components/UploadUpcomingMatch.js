import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UploadUpcomingMatch(props) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [team1, setTeam1] = useState('')
    const [team2, setTeam2] = useState('')

    function handlerUpcomingSubmit(e) {
        e.preventDefault()
        props.setUpcomingGames(prev => prev.concat({ date, time, team1, team2, id: Date.now() }))
        setDate("")
        setTime("")
        setTeam1("")
        setTeam2("")
    }

    return (
        <form onSubmit={handlerUpcomingSubmit}>
            <section id="live-information" className="information">
                <div className="live-matchs" id="live-matches">
                    <div className="match-1 match">

                        <ul>
                            <li>
                                <h3 className="match-no">Match details</h3>
                            </li>
                            <li><small>Upcoming</small></li>
                        </ul>
                        <ul>
                            <li>
                                <h4>date</h4><input value={date} onChange={e => setDate(e.target.value)} type="date" required />
                            </li>
                            <li>
                                <h4>Time</h4> <input value={time} onChange={e => setTime(e.target.value)} type="time" required />
                            </li>
                        </ul>
                        <ul>
                            <li><h3>Team 1 Name</h3></li>
                            <li>
                                <input value={team1} onChange={e => setTeam1(e.target.value)} className="input-scores" type="text" placeholder="Team 1 Name" required />
                            </li>
                        </ul>
                        <ul>
                            <li><h3>Team 2 Name</h3></li>
                            <li>
                                <input value={team2} onChange={e => setTeam2(e.target.value)} className="input-scores" type="text" placeholder="Team 2 Name" required />
                            </li>
                        </ul>
                        <button className="btn score-btn">Submit</button>
                        {/* <Link to="/live"><button className="btn score-btn">Submit</button></Link> */}
                    </div>
                </div>
            </section>
        </form>
    )
}

export default UploadUpcomingMatch