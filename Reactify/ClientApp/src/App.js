import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import NavBar from './components/navBar/NavBar.js';
import Footer from './components/footer/Footer.js';
import BandDetail from './components/bandDetail/BandDetail';
import EventsList from './components/Event/EventsList';
import Support from './components/Support';
import Playlist from './components/playList/PlayList';

import './custom.css'
import TrackList from "./components/trackList/TrackList";
import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";
import { UserProvider } from "./context/user";

function App() {
    return (
        <UserProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/playlist" exact>
                        <Playlist />
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

                    <Route path="/register" exact >
                        <Register />
                    </Route>

                    <Route path="/login" exact >
                        <Login />
                    </Route>


                    <Route path='/support' exact>
                        <Support />
                    </Route>
                    <Route path="/track/:track" component={TrackList} />

                </Switch>
                <Footer />
            </Router>
        </UserProvider>
    );
}

export default App;