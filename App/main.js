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

    const [recent, setRecent] = useState([])

    const [loginToken, setLoginToken] = useState([])



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

    //Render for the first time
    useEffect(() => {
        if (localStorage.getItem("logintoken")) {
            setLoginToken(JSON.parse(localStorage.getItem("logintoken")))
        }
    }, [])

    //Render every time changes
    useEffect(() => {
        localStorage.setItem("logintoken", JSON.stringify(loginToken))
    }, [loginToken])

    return (
        <BrowserRouter>
            <Header setLoginToken={setLoginToken} />
            <Title />
            <Navigation />
            <Switch>
                <Route path="/live">
                    <ul>
                        {games.map(i => <Live games={games} setGames={setGames} id={i.id} date={i.date} time={i.time} team1={i.team1} team2={i.team2} score1={i.score1} score2={i.score2} result={i.result} pom={i.pom} key={i.id} />)}
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





ReactDOM.render(<OurApp />, document.querySelector("#app"))
