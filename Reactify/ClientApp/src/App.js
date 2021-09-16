import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import NavBar from './components/navBar/NavBar.js';
import Footer from './components/footer/Footer.js';
import BandDetail from './components/bandDetail/BandDetail';
import EventsList from './components/EventsList';

import './custom.css'
import TrackList from "./components/trackList/TrackList";

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
                <Route path='/search-band' exact>
                    <BandDetail />
                </Route>

                <Route path="/events" exact>
                    <EventsList />
                </Route>

                <Route path="/track" exact>
                    <TrackList />
                </Route>

            </Switch>
            <Footer />
        </Router>
    );
}

export default App;