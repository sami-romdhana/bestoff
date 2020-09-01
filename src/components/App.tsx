import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Compilation from "./Compilation";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/compilation/:data">
          <Compilation />
        </Route>
      </Switch>
    </Router>
  );
}
