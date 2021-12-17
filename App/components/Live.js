import React from 'react'


function Live() {


    return (
        <section id="live-information" className="information">
            <div className="live-matchs" id="live-matches">
                <div className="match-1 match">
                    <ul>
                        <li>
                            <h3 className="match-no">1st MATCH</h3>
                        </li>
                        <li><small>Live</small></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Team 1</h3>
                        </li>
                        <li>
                            <h3>Team 1 score</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Team 2</h3>
                        </li>
                        <li>
                            <h3>Team 2 score</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Match Result</h3>
                        </li>
                        <li>
                            <h3>Result</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Live