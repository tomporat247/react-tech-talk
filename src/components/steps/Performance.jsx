import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useRef, useState } from "react";
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
];

const Performance = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState(initialItems);

  const onaAddMovie = (movieName) => {
    if (movies.every(({ name }) => name !== movieName)) {
      setMovies([...movies, { id: uuid(), name: movieName }]);
    }
  };

  const onDeleteMovie = (idToDelete) =>
    setMovies(movies.filter(({ id }) => id !== idToDelete));

  const onChangeMovie = (idToChange, newName) =>
    setMovies(
      movies.map((movie) =>
        movie.id === idToChange ? { ...movie, name: newName } : movie
      )
    );

  return (
    <>
      <Header onAddMovie={onaAddMovie} />
      <div className={classes.itemContainer}>
        {movies.map(({ id, name }) => (
          <Movie
            key={id}
            text={name}
            onChange={(newName) => onChangeMovie(id, newName)}
            onDelete={() => onDeleteMovie(id)}
          />
        ))}
      </div>
    </>
  );
};

const Header = ({ onAddMovie }) => {
  const classes = useStyles();
  const inputRef = useRef();

  const [name, setName] = useState("");
  const onAdd = () => {
    onAddMovie(name);
    setName("");
    inputRef.current.focus();
  };

  return (
    <Paper component="form" className={classes.addNewRoot}>
      <InputBase
        inputRef={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={classes.input}
        placeholder="Add Item"
      />
      <IconButton
        className={classes.iconButton}
        onClick={onAdd}
        disabled={name.length === 0}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

const Movie = ({ text, onDelete, onChange }) => {
  const classes = useStyles();
  console.log('rendered', text);

  return (
    <div className={classes.movieContainer}>
      <TextField
        className={classes.movieText}
        value={text}
        variant="filled"
        onChange={(e) => onChange(e.target.value)}
      />
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Performance;
