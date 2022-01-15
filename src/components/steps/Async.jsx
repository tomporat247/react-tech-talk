import { useEffect, useState } from "react";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from "@material-ui/core";

const fetchItems = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["1", "2", "3", "4", "5"]), 3000)
  );

const Async = () => {
  const [showItems, setShowItems] = useState(false);
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={showItems}
            onChange={() => setShowItems(!showItems)}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Show Items"
      />
      {showItems ? <Items /> : <div>Not Showing Items</div>}
    </>
  );
};

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const fetchedItems = await fetchItems();
      setLoading(false);
      setItems(fetchedItems);
    };
    fetch();
  }, []);

  return loading ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Async;
