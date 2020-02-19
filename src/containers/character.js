import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Character() {
  const LIMIT = 100;

  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [count, setCount] = useState(0);

  const API = process.env.REACT_APP_API + "/comics";
  console.log(">>>>>>> API", API);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = API;
        // +
        // "?skip=" +
        // (page > 0 ? (page - 1) * LIMIT : 0) +
        // "&limit=" +
        // LIMIT;
        console.log(">>>>>>> api", apiUrl);
        const response = await axios.get(apiUrl);
        console.log(">>>>>>> response.data", response.data);
        setCount(response.data.count);
        setComics(response.data.results);
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
        <div>
          <h1>Component character {count}</h1>
          <p>
            {comics.map((comic, _) => {
              // return <Product key={product._id} product={product} />;
            })}
          </p>
        </div>
      )}
    </>
  );
}

export default Character;
