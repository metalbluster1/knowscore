import React, { useState, useEffect, useReducer, useCallback, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useImmerReducer } from 'use-immer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import StateContext from './StateContext'
import DispatchContext from './DispatchContext'

//Components

import Header from './components/Header'
import HeaderLogin from './components/HeaderLogin'
import Navigation from './components/Navigation'
import Title from './components/Title'
import Recent from './components/Recent'
import Upcoming from './components/Upcoming'
import Live from './components/Live'
import Footer from './components/Footer'
import Upload from './components/Upload'
import ClientLogin from './components/ClientLogin'
import ClientSignin from './components/ClientSingin'
import About from './components/About'
import UploadLive from './components/UploadLive'
import UploadUpcomingMatch from './components/UploadUpcomingMatch'



function OurApp() {


    const initialState = {
        loggedIn: Boolean(localStorage.getItem("logintoken")),
        user: {
            loginInfo: localStorage.getItem('logintoken')
        }
    }

    function ourReducer(draft, action) {
        switch (action.type) {
            case "login":
                draft.loggedIn = true
                // draft.user = action.data
                return
            case "logout":
                draft.loggedIn = false
                return

        }
    }



    const [state, dispatch] = useImmerReducer(ourReducer, initialState)

    // useEffect(() => {
    //     if (state.loggedIn) {
    //         localStorage.getItem('logintoken', state.user.loginInfo)
    //     }
    //     else {
    //         localStorage.removeItem('logintoken')
    //     }
    // }, [state.loggedIn])

    const [games, setGames] = useState([])

    const [upcomingGames, setUpcomingGames] = useState([])

    const [recent, setRecent] = useState([])

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

    //Render for the fist time
    useEffect(() => {
        if (localStorage.getItem("upcomingGames")) {
            setUpcomingGames(JSON.parse(localStorage.getItem("upcomingGames")))
        }
    }, [])

    //Render evert time
    useEffect(() => {
        localStorage.setItem("upcomingGames", JSON.stringify(upcomingGames))
    }, [upcomingGames])

    //Render for the first time
    // useEffect(() => {
    //     if (localStorage.getItem("logintoken")) {
    //         setLoginToken(JSON.parse(localStorage.getItem("logintoken")))
    //     }
    // }, [])


    //Render every time changes
    useEffect(() => {
        localStorage.setItem("logintoken", JSON.stringify(loginToken))
    }, [loginToken])

    return (
        // <ExampleContext.Provider value={{ setLoginToken, setLoggedIn, loggedIn }}>
        //     </ExampleContext.Provider>
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <BrowserRouter>
                    <Header />
                    <Title />
                    <Navigation />
                    <Switch>
                        <Route path="/live">
                            <Live />
                        </Route>
                        <Route path="/upcoming">
                            <ul>
                                {upcomingGames.map(i => <Upcoming upcomingGames={upcomingGames} setUpcomingGames={setUpcomingGames} id={i.id} date={i.date} time={i.time} team1={i.team1} team2={i.team2} key={i.id} />)}
                            </ul>
                        </Route>
                        <Route path="/recent">
                            <ul>
                                {games.map(i => <Recent games={games} setGames={setGames} id={i.id} date={i.date} time={i.time} team1={i.team1} team2={i.team2} score1={i.score1} score2={i.score2} result={i.result} pom={i.pom} key={i.id} />)}
                            </ul>
                        </Route>
                        <Route path="/upload">
                            <Upload setGames={setGames} />
                        </Route>
                        <Route path="/uploadlive">
                            <UploadLive />
                        </Route>
                        <Route path="/uploadupcoming">
                            <UploadUpcomingMatch setUpcomingGames={setUpcomingGames} />
                        </Route>
                        <Route path="/loginpage">
                            {loggedIn ? <Live /> : <ClientLogin setLoginToken={setLoginToken} />}
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
            </DispatchContext.Provider>
        </StateContext.Provider>
    )


}





ReactDOM.render(<OurApp />, document.querySelector("#app"))
