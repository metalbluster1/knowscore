import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


//Components
import Header from './components/Header'
import HeaderLogin from './components/HeaderLogin'
import Navigation from './components/Navigation'
import Title from './components/Title'
import Upcoming from './components/Upcoming'
import Recent from './components/Recent'
import Footer from './components/Footer'
import Upload from './components/Upload'
import ClientLogin from './components/ClientLogin'
import ClientSignin from './components/ClientSingin'
import About from './components/About'

function OurApp() {

    const [games, setGames] = useState([])
    const [loginToken, setLoginToken] = useState([])

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('loginToken')) {
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
    })



    /// --------- For the Scores ----------
    //Render for the first time
    useEffect(() => {
        if (localStorage.getItem('games')) {
            setGames(JSON.parse(localStorage.getItem('games')))
        }
    }, [])

    //Render for every time changes
    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games))
    }, [games])

    ///----------- For the Login Token --------
    //Render for the first time
    useEffect(() => {
        if (localStorage.getItem('loginToken')) {
            setLoginToken(JSON.parse(localStorage.getItem('loginToken')))
        }
    }, [])

    //Render for every time changes
    useEffect(() => {
        localStorage.setItem('loginToken', JSON.stringify(loginToken))
    }, [loginToken])

    return (
        <BrowserRouter>
            <ul>
                {loggedIn ? <HeaderLogin /> : <Header />}
            </ul>
            <Title />
            <Navigation />
            <Switch>
                <Route path="/live">
                    <ul>
                        {games.map(game => {
                            <Game setGames={setGames} id={game.id} score1={game.score1} score2={game.score2} result={game.result} pom={game.pom} key={game.id} />
                        })}
                    </ul>
                </Route>
                <Route path="/upcoming">
                    <Upcoming />
                </Route>
                <Route path="/recent">
                    <Recent />
                </Route>
                <Route path="/upload">
                    <Upload setGames={setGames} />
                </Route>
                <Route path="/loginpage">
                    <ClientLogin setLoginToken={setLoginToken} />
                </Route>
                <Route path="/signinpage">
                    <ClientSignin />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )


}

function Game(props) {


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

// function Header() {
//     return (
//         <header className='localheader'>
//             <div className="main-header">
//                 <div id="header" className="container">
//                     <h1 className="header">LOCAL CRICKET</h1>
//                 </div>
//                 <div className="client-header">
//                     <ul>
//                         <a className="login client">Login</a>
//                         <a className="signup client">SignUp</a>
//                     </ul>
//                 </div>
//             </div>
//         </header>
//     )

// }

// function AddForm(props) {

//     const [matchno, setMatchno] = useState("")
//     const [team1Name, setTeam1Name] = useState("")
//     const [team2Name, setTeam2Name] = useState("")
//     const [team1Score, setTeam1Score] = useState("")
//     const [team2Score, setTeam2Score] = useState("")
//     const [teamWon, setTeamWon] = useState("")

//     function handlerSubmit(e) {
//         e.preventDefault()
//         props.setScores(prev => prev.concat({ matchno, team1Name, team2Name, team1Score, team2Score, teamWon, id: Date.now() }))
//         setMatchno("")
//         setTeam1Name("")
//         setTeam2Name("")
//         setTeam1Score("")
//         setTeam2Score("")
//         setTeamWon("")
//     }


//     return (
//         <form onSubmit={handlerSubmit} className='localaddform'>
//             <h2>Score Form</h2>
//             <ul>
//                 <li>
//                     <label>Match NO</label>
//                     <input value={matchno} onChange={e => setMatchno(e.target.value)} type="text" htmlFor="matchno" placeholder="Match No" required />
//                 </li>
//                 <li>
//                     <label>Team 1 Name</label>
//                     <input value={team1Name} onChange={e => setTeam1Name(e.target.value)} type="text" htmlFor="team1name" placeholder="Team 1" required />
//                 </li>
//                 <li>
//                     <label>Team 2 Name</label>
//                     <input value={team2Name} onChange={e => setTeam2Name(e.target.value)} type="text" htmlFor="team2name" placeholder="Team 2" required />
//                 </li>
//                 <li>
//                     <label>Team 1 Score</label>
//                     <input value={team1Score} onChange={e => setTeam1Score(e.target.value)} type="text" htmlFor="team1score" placeholder="Team 1 score" required />
//                 </li>
//                 <li>
//                     <label>Team 2 score</label>
//                     <input value={team2Score} onChange={e => setTeam2Score(e.target.value)} type="text" htmlFor="team2score" placeholder="Team 2 score" required />
//                 </li>
//                 <li>
//                     <label>Team Won</label>
//                     <input value={teamWon} onChange={e => setTeamWon(e.target.value)} type="text" htmlFor="winnerteam" placeholder="Winner Team" required />
//                 </li>
//                 <button className='btn localbtn'>Submit</button>
//             </ul>
//         </form>
//     )
// }

// function Card(props) {

//     function handledelete() {
//         props.setScores(prev => prev.filter(scores => scores.id != props.id))
//     }

//     return (
//         <form className='localscoreslist'>
//             <ul>
//                 <h2 className='localscorecard'>Score Card</h2>
//                 <li>
//                     <h2>Match NO: {props.matchno}</h2>
//                 </li>
//                 <li>
//                     <h2>{props.team1Name} VS {props.team2Name}</h2>
//                 </li>
//                 <li>
//                     <h2>Team 1 socre: {props.team1Score}</h2>
//                 </li>
//                 <li>
//                     <h2>Team 2 score: {props.team2Score}</h2>
//                 </li>
//                 <li>
//                     <h2>Team Won: {props.teamWon}</h2>
//                 </li>
//                 <button onClick={handledelete} className='deletebtn'>Delete</button>
//             </ul>
//         </form>
//     )
// }




ReactDOM.render(<OurApp />, document.querySelector("#app"))
