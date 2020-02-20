import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

function ComicItem({ id, title, thumbnail, description }) {
  // const link = "/personnages/" + id + "/comics";
  return (
    <li>
      <Link to="#">
        <div className="ima">
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        </div>
        <div className="info">
          <h2>{title}</h2>
          <p>
            {id} - {description}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default ComicItem;
