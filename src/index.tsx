import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import routes from './routes';
import './style/index.scss';


const routing = (
    <Provider store={store}>
        <Router>
            <Switch>
                {routes.map(({path, component})=><Route exact path={path} component={component} />)}
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
