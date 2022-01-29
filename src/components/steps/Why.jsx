import { useState } from "react";
import { Button } from "@material-ui/core";
import { v4 as uuid } from "uuid";

const Why = () => {
  console.log("render Why");
  const [movies, setMovies] = useState([
    { id: uuid(), title: "Star Wars" },
    { id: uuid(), title: "Batman" },
    { id: uuid(), title: "Interstellar" },
    { id: uuid(), title: "Coach Carter" },
  ]);

  const reverseMovies = () => setMovies(movies.reverse());

  return (
    <>
      <div>Why won't this work?</div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <Button onClick={reverseMovies} variant="contained" color="primary">
        Reverse Movies
      </Button>
    </>
  );
};

export default Why;
