import React from 'react'
import { Home } from './home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './profile'

const Pages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/profile'>
                    <Profile />
                </Route>
                <Route exact path='*'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Pages;