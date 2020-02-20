import React, { useState, useEffect } from "react";

import { useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";
import ComicItem from "../components/ComicItem";

function Comic() {
  const LIMIT = 10;

  const { id, p } = useParams();
  const page = p ? parseInt(p) : 1;
  console.log(">>> page >>>>> ", page);

  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [count, setCount] = useState(0);

  const API = process.env.REACT_APP_API + "/characters/" + id + "/comics";
  console.log(">>>>>>> API", API);

  const apiUrl = API + "?limit=" + LIMIT + "&offset=" + (page - 1) * LIMIT;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        console.log(">>>>>>> api", apiUrl);
        const response = await axios.get(apiUrl);
        console.log(">>>>>>> response.data", response.data);
        setCount(response.data.total);
        setComics(response.data.results);
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
        <Link to={`/personnages/${id}/comics/${i}`}>{i}</Link>
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
          <div className="character">
            <div>
              <h1>Comics</h1>
              <span>{count} au total</span>
            </div>

            <ul className="paging">{pager}</ul>
            <ul>
              {comics.map((comic, _) => {
                return <ComicItem key={comic.id} {...comic} />;
              })}
            </ul>
            <ul className="paging">{pager}</ul>
          </div>
        </>
      )}
    </>
  );
}

export default Comic;
