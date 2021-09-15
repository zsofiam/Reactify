import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import MusicPlayer from './components/musicPlayer/MusicPlayer';

import './custom.css'
import BandDetail from './components/BandDetail';

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
                <Route path='/search-band' exact>
                    <BandDetail />
                </Route>

            </Switch>
        </Router>
    );
}

export default App;