import React from 'react'
import * as AiIcons from 'react-icons/ai'


function Live(props) {

    let count = 0

    function handlerDelete() {
        props.setGames(prev => prev.filter(games => games.id != props.id))
    }


    return (
        <section id="live-information" className="information">
            <div className="live-matchs" id="live-matches">
                <div className="match-1 match">
                    <ul>
                        <li>
                            <h3 className="match-no">1st MATCH</h3>
                        </li>
                        <li><small>Live   </small><small><button onClick={handlerDelete}><AiIcons.AiOutlineDelete /></button></small></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Team 1</h3>
                        </li>
                        <li>
                            <h3>{props.score1}</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Team 2</h3>
                        </li>
                        <li>
                            <h3>{props.score2}</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Match Result</h3>
                        </li>
                        <li>
                            <h3>{props.result}</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Player of the Match</h3>
                        </li>
                        <li>
                            <h3>{props.pom}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Live