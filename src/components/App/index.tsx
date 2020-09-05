import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Homepage from "components/Homepage";
import Compilation from "components/Compilation";
import EditorStart from "components/EditorStart";
import Editor from "components/Editor";
import Footer from "components/Footer";
import "./style.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="App--header">
          <Header />
        </div>

        <div className="App--content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/compilation/:data">
              <Compilation />
            </Route>
            <Route exact path={"/editor"}>
              <EditorStart />
            </Route>
            <Route exact path={"/editor/:data"}>
              <Editor />
            </Route>
          </Switch>
        </div>

        <div className="App--footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
