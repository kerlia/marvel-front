import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

import logo from "../img/logo.svg";

function Header({ modal, setModal }) {
  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/personnages"
                activeClassName="selected"
                exact={true}
              >
                PERSONNAGES
              </NavLink>
            </li>
            <li>
              <NavLink to="/comics" activeClassName="selected" exact={true}>
                COMICS
              </NavLink>
            </li>
            <li>
              <NavLink to="/favoris" activeClassName="selected" exact={true}>
                FAVORIS
              </NavLink>
            </li>
            <li>
              <button
                onClick={e => {
                  // const modal = true;
                  setModal(true);
                }}
              >
                LOGIN
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
