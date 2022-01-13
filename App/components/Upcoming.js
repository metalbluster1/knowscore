import React from 'react'
import * as AiIcons from 'react-icons/ai'

function Upcoming(props) {

    function handlerDelete() {
        props.setUpcomingGames(prev => prev.filter(upcomingGames => upcomingGames.id != props.id))
    }

    return (
        <section id="upcoming-information" className="information">
            <div className="upcoming-matchs" id="upcoming-matches">
                <div className="match-1 match">
                    <ul>
                        <li>
                            <h3 className="match-no">Match Details</h3>
                        </li>
                        <li><small>Upcoming   <small><button onClick={handlerDelete}><AiIcons.AiOutlineDelete /></button></small></small></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Date: {props.date}</h3>
                        </li>
                        <li>
                            <h3>Time: {props.time}</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>{props.team1}</h3>
                        </li>
                        <li><small>VS</small></li>
                        <li>
                            <h3>{props.team2}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Upcoming