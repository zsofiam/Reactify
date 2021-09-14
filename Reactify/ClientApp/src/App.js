import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import NavBar from './components/navBar/Navbar.js';

import './custom.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>

                <Route path="/player" exact>
                    <MusicPlayer />
                </Route>

            </Switch>
        </Router >
    );
}

export default App;