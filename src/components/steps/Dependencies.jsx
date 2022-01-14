import { Button, ButtonGroup } from "@material-ui/core";
import { useEffect, useState } from "react";

const Dependencies = () => {
  const [counter, setCounter] = useState(0);

  const options = ["update", "delete"];

  const onOptionClick = (option) => {
    const newCounter = counter + 1;
    console.log(`clicked ${newCounter} times`);
    setCounter(newCounter);
  };

  return <Options options={options} onOptionClick={onOptionClick} />;
};

const Options = ({ options, onOptionClick }) => {
  useEffect(() => {
    console.log("options changed");
    console.log(`showing options: ${options.join(", ")}`);
    // Notify the user a new option is available
  }, [options]);

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {options.map((option) => (
        <Button key={option} onClick={() => onOptionClick(option)}>
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Dependencies;
