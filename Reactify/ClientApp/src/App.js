import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import MusicPlayer from './components/musicPlayer/MusicPlayer';

import './custom.css'
import TrackList from "./components/trackList/TrackList";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>

                <Route path="/player" exact>
                    <MusicPlayer />
                </Route>

                <Route path="/tracklist" exact>
                    <TrackList />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;