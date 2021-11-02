import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./routes/Home";
import Painel from "./routes/Panel";

const App = () => {
    return (
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/painel" component={Painel} />
                    </Switch>
                </Router>
            </div>
    )
};

export default App;