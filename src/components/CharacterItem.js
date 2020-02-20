import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

function CharacterItem({ name, thumbnail, description }) {
  return (
    <li>
      <Link to="#">
        <div className="ima">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default CharacterItem;
