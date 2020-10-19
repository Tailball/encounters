import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Login from './pages/Login.page';
import Encounters from './pages/Encounters.page';
import Encounter from './pages/Encounter.page';


export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <Link to="/login">Sign in</Link>
                <Link to="/encounters">Encounters</Link>
                <Link to="/encounter/12345">Encounter</Link>

                <Switch>
                    <Route path="/encounter/:id" component={Encounter} />
                    <Route path="/encounters" component={Encounters} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
};
