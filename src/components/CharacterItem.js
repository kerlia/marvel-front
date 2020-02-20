import React from "react";

function CharacterItem({ name, thumbnail, description }) {
  return (
    <li>
      <div className="ima">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default CharacterItem;
