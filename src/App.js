import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
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
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <Router>
        <Header modal={modal} setModal={setModal} />

        <div className="container">
          <Switch>
            <Route path="/personnages/:id/comics/:p?">
              <Comic search={search} setSearch={setSearch} />
            </Route>
            <Route path="/personnages/:p?">
              <Character search={search} setSearch={setSearch} />
            </Route>
            <Route path="/comics/:p?">
              <Comic search={search} setSearch={setSearch} />
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
        {modal && (
          <div
            className="modal"
            onClick={e => {
              if (e.target.className === "modal") {
                setModal(false);
              }
            }}
          >
            <Login
            // user={user}
            // setUser={setUser}
            // modal={modal}
            // setModal={setModal}
            />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
