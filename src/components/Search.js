import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({ search, setSearch }) {
  const history = useHistory();

  const [q, setQ] = useState("");
  const [type, setType] = useState("characters");

  const handleQChange = e => {
    const value = e.target.value;
    setQ(value);
  };

  const handleTypeChange = e => {
    const value = e.target.value;
    setType(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(">>>>>>> q & type", q, type);

    if (q === "") {
      alert("Renseignez le champ de recherche!");
    } else {
      console.log(" >>>> SUBMIT search");
      console.log(">>>>> q & type", q, type);
      setSearch(q);
      console.log(search);

      let redirectPath = "";

      if (type === "characters") {
        redirectPath = "/personnages";
      } else {
        redirectPath = "/comics";
      }
      history.push(redirectPath);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div>
        <span>
          <FontAwesomeIcon className="icon" icon="search" />
          <input
            placeholder="Que recherchez-vous?"
            type="text"
            name="q"
            defaultValue=""
            onChange={handleQChange}
          />
        </span>
        <input type="submit" className="btn" value="Rechercher" />
      </div>
      <div>
        <input
          type="radio"
          name="type1"
          id="radio-comic"
          value="comics"
          onChange={handleTypeChange}
        />
        <label htmlFor="radio-comic">Dans les comics</label>
        <input
          type="radio"
          name="type1"
          id="radio-character"
          value="characters"
          onChange={handleTypeChange}
        />
        <label htmlFor="radio-character">Dans les personnages</label>
      </div>
    </form>
  );
}

export default Search;
