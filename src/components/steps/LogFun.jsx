import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const LogFun = () => {
  const [value, setValue] = useState(0);

  const onClick = () => {
    console.log("D", setValue(value + 1));

    setValue((arg) => {
      const newValue = arg + 1;
      console.log("E", newValue);
      return newValue;
    });

    setValue(value + 1);
    console.log("F", value);
  };

  console.log("A", value);

  useEffect(() => console.log("B", value), [value]);

  if (value >= 1 && value <= 3) {
    console.log("C", value);
  }

  return (
    <Button onClick={onClick} variant="contained" color="primary">
      Click Me
    </Button>
  );
};

export default LogFun;
