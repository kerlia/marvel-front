import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Character from "./containers/Character";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/personnages">
              <Character />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
