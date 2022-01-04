import React, { useState } from 'react'
import { ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import Live from './Live'



function Upload(props) {

    const [date, SetDate] = useState("")
    const [time, setTime] = useState("")
    const [team1, setTeam1] = useState("")
    const [team2, setTeam2] = useState("")
    const [score1, setScore1] = useState("")
    const [score2, setScore2] = useState("")
    const [result, setResult] = useState("")
    const [pom, setPom] = useState("")

    function handleScoreSubmit(e) {
        e.preventDefault()
        props.setGames(prev => prev.concat({ date, time, score1, score2, result, team1, team2, pom, id: Date.now() }))
        SetDate("")
        setTime("")
        setTeam1("")
        setTeam2("")
        setScore1("")
        setScore2("")
        setResult("")
        setPom("")
    }

    return (
        <form onSubmit={handleScoreSubmit}>
            <section id="live-information" className="information">
                <div className="live-matchs" id="live-matches">
                    <div className="match-1 match">

                        <ul>
                            <li>
                                <h3 className="match-no">Match details</h3>
                            </li>
                            <li><small>Live</small></li>
                        </ul>
                        <ul>
                            <li>
                                <h4>date</h4><input value={date} onChange={e => SetDate(e.target.value)} type="date" required />
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
                            <li><h3>Team 1 Score</h3></li>
                            <li>
                                <input value={score1} onChange={e => setScore1(e.target.value)} className="input-scores" type="text" placeholder="Enter score" required />
                            </li>
                        </ul>
                        <ul>
                            <li><h3>Team 2 Name</h3></li>
                            <li>
                                <input value={team2} onChange={e => setTeam2(e.target.value)} className="input-scores" type="text" placeholder="Team 2 Name" required />
                            </li>
                        </ul>
                        <ul>
                            <li><h3>Team 2 Score</h3></li>
                            <li>
                                <input value={score2} onChange={e => setScore2(e.target.value)} className="input-scores" type="text" placeholder="Enter score" required />
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <h3>Team Won</h3>
                            </li>
                            <li>
                                <input value={result} onChange={e => setResult(e.target.value)} className="input-scores" type="text" placeholder="Team Name" required />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Player of the Match</h4>
                            </li>
                            <li>
                                <input value={pom} onChange={e => setPom(e.target.value)} className="input-scores" type="text" placeholder="Name" required />
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

export default Upload