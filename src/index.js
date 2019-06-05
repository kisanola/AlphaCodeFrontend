import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import store from './store';

import Home from "./Containers/Home/Home";
import NotFound from "./Containers/NotFound/NotFound";

const routing = (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
