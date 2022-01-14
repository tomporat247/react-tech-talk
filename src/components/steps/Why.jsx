import { useState } from "react";
import { Button } from "@material-ui/core";

const Why = () => {
  const [movies, setMovies] = useState([
    { id: "12", title: "Star Wars" },
    { id: "23", title: "Batman" },
    { id: "53", title: "Interstellar" },
    { id: "34", title: "Coach Carter" },
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
