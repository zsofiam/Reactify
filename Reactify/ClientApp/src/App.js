import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';

import './custom.css'

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;