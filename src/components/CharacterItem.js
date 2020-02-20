import React from "react";

function CharacterItem({ name, thumbnail, description }) {
  return (
    <li>
      <a href="#">
        <div className="ima">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}

export default CharacterItem;
