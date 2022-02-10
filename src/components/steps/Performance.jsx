import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Slideshow";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const useStyles = makeStyles((theme) => ({
  addNewRoot: {
    padding: "2px 4px",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  movieContainer: { display: "flex", alignItems: "center" },
  movieText: { width: "100%" },
}));

const initialItems = [
  { id: uuid(), name: "Star Wars" },
  { id: uuid(), name: "Batman" },
  { id: uuid(), name: "Interstellar" },
  { id: uuid(), name: "Coach Carter" },
  { id: uuid(), name: "Law Abiding Citizen" },
  { id: uuid(), name: "Memento" },
  { id: uuid(), name: "Spiderman" },
];

const Performance = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState(initialItems);

  const onChangeMovie = (newMovie) =>
    setMovies(
      movies.map((movie) => (movie.id === newMovie.id ? newMovie : movie))
    );

  return (
    <div className={classes.itemContainer}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onChange={onChangeMovie} />
      ))}
    </div>
  );
};

const Movie = ({ movie, onChange }) => {
  const classes = useStyles();
  console.log("rendered", movie.name);

  return (
    <div className={classes.movieContainer}>
      <TextField
        className={classes.movieText}
        value={movie.name}
        variant="filled"
        onChange={(e) => onChange({ ...movie, name: e.target.value })}
      />
      <MovieIcon />
    </div>
  );
};

export default Performance;
