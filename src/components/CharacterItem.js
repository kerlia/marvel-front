import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

function CharacterItem({ id, name, thumbnail, description }) {
  const link = "/personnages/" + id + "/comics";
  return (
    <li>
      <Link to={link}>
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
