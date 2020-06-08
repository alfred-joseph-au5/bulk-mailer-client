import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navi from './components/Navi';
import LandingPage from './components/LandingPage'
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

export default (
    <div className="root">
        <Route path='/' component= { Navi } />
        <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route exact path="/signup" component={ SignupPage } />
            <Route exact path="/login" component={ LoginPage } />
        </Switch>
    </div>
)