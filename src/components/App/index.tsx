import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import "./style.css";

const Homepage = lazy(() => import("components/Homepage"));
const Compilation = lazy(() => import("components/Compilation"));
const EditorStart = lazy(() => import("components/EditorStart"));
const Editor = lazy(() => import("components/Editor"));

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="App--header">
          <Header />
        </div>

        <div className="App--content">
          <Suspense fallback={<LoadingRoute />}>
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
          </Suspense>
        </div>

        <div className="App--footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function LoadingRoute() {
  return <div className="App--loading">...</div>;
}
