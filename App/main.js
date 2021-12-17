import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Components
import Header from './components/Header'
import HeaderLogin from './components/HeaderLogin'
import Navigation from './components/Navigation'
import ClientLogin from './components/ClientLogin'
import ClientSignin from './components/ClientSingin'
import Live from './components/Live'
import Recent from './components/Recent'
import Upcoming from './components/Upcoming'
import Upload from './components/Upload'
import Title from './components/Title'
import Footer from './components/Footer'




function AppComponents() {

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Title />
            <Switch>
                <Route path="/live">
                    <Live />
                </Route>
                <Route path="/upcoming">
                    <Upcoming />
                </Route>
                <Route path="/recent">
                    <Recent />
                </Route>
                <Route path="/loginpage">
                    <ClientLogin />
                </Route>
                <Route path="/signinpage">
                    <ClientSignin />
                </Route>
                <Route path="/upload">
                    <Upload />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}


ReactDOM.render(<AppComponents />, document.querySelector("#app"))
