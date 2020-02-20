import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Character from "./containers/Character";
import Comic from "./containers/Comic";
import Stared from "./containers/Stared";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faUser,
  faSearch,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircle, faUser, faSearch, faPlusSquare);

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/personnages/:id/comics/:p?">
              <Comic />
            </Route>
            <Route path="/personnages/:p?">
              <Character />
            </Route>
            <Route path="/comics/:p?">
              <Comic />
            </Route>
            <Route path="/favoris">
              <Stared />
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
