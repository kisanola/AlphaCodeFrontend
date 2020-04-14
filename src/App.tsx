import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import './style/index.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
