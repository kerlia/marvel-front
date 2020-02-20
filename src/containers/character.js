import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import CharacterItem from "../components/CharacterItem";

function Character() {
  const LIMIT = 20;
  const OFFSET = 0;

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

  const API = process.env.REACT_APP_API + "/characters";
  console.log(">>>>>>> API", API);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = API + "?limit=" + LIMIT + "&offset=" + OFFSET;
        console.log(">>>>>>> api", apiUrl);
        const response = await axios.get(apiUrl);
        console.log(">>>>>>> response.data", response.data);
        setCount(response.data.count);
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (e) {
        console.error(">>>>>>> Error fetching data from api");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <div className="character">
          <h1>Personnages {count}</h1>
          <ul>
            {characters.map((character, _) => {
              return <CharacterItem key={character.id} {...character} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Character;
