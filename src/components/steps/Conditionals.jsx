import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  question: { margin: "30px" },
}));

const Conditionals = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log("value", value);
  if (value === 1) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cond, setCond] = useState(0);
    console.log("cond", cond);
  }
  const [doubleValue, setDoubleValue] = useState(0);
  console.log("doubleValue", doubleValue);

  const increaseValues = () => {
    setValue(value + 1);
    setDoubleValue(doubleValue + 2);
  };
  return (
    <>
      <div>Value: {value}</div>
      <div>Double Value: {doubleValue}</div>

      <div className={classes.question}>
        What will happen when I'll click the button?
      </div>

      <Button onClick={increaseValues} variant="contained" color="primary">
        Click Me
      </Button>
    </>
  );
};

export default Conditionals;
