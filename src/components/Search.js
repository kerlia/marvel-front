import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <form className="search-bar" action="">
      <div>
        <span>
          <FontAwesomeIcon className="icon" icon="search" />
          <input
            placeholder="Que recherchez-vous?"
            type="text"
            name="query"
            defaultValue=""
          />
        </span>
        <input type="submit" className="btn" value="Rechercher" />
      </div>
      <div>
        <input
          type="radio"
          name="email"
          id="radio-comic"
          defaultValue=""
          // onChange={handleEmailChange}
        />
        <label htmlFor="radio-comic">Dans les comics</label>
        <input
          type="radio"
          name="email"
          id="radio-character"
          defaultValue=""
          // onChange={handleEmailChange}
        />
        <label htmlFor="radio-character">Dans les personnages</label>
      </div>
    </form>
  );
}

export default Search;
