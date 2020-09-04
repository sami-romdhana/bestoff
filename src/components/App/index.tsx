import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Compilation from "components/Compilation";
import Editor from "components/Editor";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <div className="App--header">
        <Header />
      </div>

      <Router>
        <Switch>
          <Route exact path="/compilation/:data">
            <Compilation />
          </Route>
          <Route exact path={["/editor", "/editor/:data"]}>
            <Editor />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
