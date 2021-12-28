import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


//Components
import Header from './components/Header'
import HeaderLogin from './components/HeaderLogin'
import Navigation from './components/Navigation'
import Title from './components/Title'
import Live from './components/Live'
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



    /// --------- For the Scores ----------
    //Render for the first time
    useEffect(() => {
        if (localStorage.getItem("games")) {
            setGames(JSON.parse(localStorage.getItem("games")))
        }
    }, [])

    //Render for every time changes
    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(games))
    }, [games])

    ///----------- For the Login Token --------
    //Render for the first time
    // useEffect(() => {
    //     if (localStorage.getItem('loginToken')) {
    //         setLoginToken(JSON.parse(localStorage.getItem('loginToken')))
    //     }
    // }, [])

    // //Render for every time changes
    // useEffect(() => {
    //     localStorage.setItem('loginToken', JSON.stringify(loginToken))
    // }, [loginToken])

    return (
        <BrowserRouter>
            <HeaderLogin />
            <Title />
            <Navigation />
            <Switch>
                <Route path="/live">
                    <ul>
                        {games.map(i => <Live games={games} setGames={setGames} id={i.id} score1={i.score1} score2={i.score2} result={i.result} pom={i.pom} key={i.id} />)}
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

function Game() {


    return (
        <section id="live-information" className="information">
            <div className="live-matchs" id="live-matches">
                <div className="match-1 match">
                    <ul>
                        <li>
                            <h3 className="match-no">1st MATCH</h3>
                        </li>
                        <li><small>Live</small><small>delete</small></li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Team 1</h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Team 2</h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Match Result</h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Player of the Match</h3>
                        </li>
                        <li>
                            <h3></h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}





ReactDOM.render(<OurApp />, document.querySelector("#app"))
