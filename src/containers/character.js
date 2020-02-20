import React, { useState, useEffect } from "react";

import { useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";
import CharacterItem from "../components/CharacterItem";
import Search from "../components/Search";

function Character({ search, setSearch }) {
  const LIMIT = 50;

  const { p } = useParams();
  const page = p ? parseInt(p) : 1;
  console.log(">>> page >>>>> ", page);

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);

  let API = "";

  if (search) {
    API =
      process.env.REACT_APP_API + "/search?type=characters&q=" + search + "&";
  } else {
    API += process.env.REACT_APP_API + "/characters?";
  }

  API += "limit=" + LIMIT + "&offset=" + (page - 1) * LIMIT;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        console.log(">>>>>>> api", API);
        const response = await axios.get(API);
        console.log(">>>>>>> response.data", response.data);
        setCount(response.data.total);
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (e) {
        console.error(">>>>>>> Error fetching data from api");
      }
    };
    fetchData();
  }, [page]);

  let pager = [];
  for (let i = 0; i * LIMIT < count; i * LIMIT) {
    i++;
    pager.push(
      <li key={i} className={page === i && "selected"}>
        <Link to={`/personnages/${i}`}>{i}</Link>
      </li>
    );
  }
  console.log(">>>>>>> Pager", pager);

  return (
    <>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <div className="character">
            <div>
              <h1>Personnages</h1>
              <span>{count} au total</span>
            </div>
            <ul className="paging">{pager}</ul>
            <ul>
              {characters.map((character, _) => {
                return <CharacterItem key={character.id} {...character} />;
              })}
            </ul>
            <ul className="paging">{pager}</ul>
          </div>
        </>
      )}
    </>
  );
}

export default Character;
