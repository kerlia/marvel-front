import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

import logo from "../img/logo.svg";

function Header() {
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
                to="/"
                exact={true} // activeClassName="selected" // className="menu-search"
              >
                PERSONNAGES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                exact={true} // activeClassName="selected" // className="menu-search"
              >
                COMICS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                exact={true} // activeClassName="selected" // className="menu-search"
              >
                FAVORIS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
