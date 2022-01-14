import {memo, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Checkbox, Chip, Paper} from "@material-ui/core";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Performance = () => {
  console.log("rendered parent");

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [payNow, setPayNow] = useState(true);

  const onProductClick = (product) => {
    let updatedSelectedProducts;

    if (selectedProducts.includes(product)) {
      updatedSelectedProducts = selectedProducts.filter(
        (selectedProduct) => selectedProduct !== product
      );
    } else {
      updatedSelectedProducts = [...selectedProducts, product];
    }

    setSelectedProducts(updatedSelectedProducts);
  };

  const availableCartProducts = [
    "Apple",
    "Milk",
    "Bread",
    "Krembo",
    "Rice",
    "Chips",
  ];

  return (
    <>
      <Cart
        availableCartProducts={availableCartProducts}
        selectedProducts={selectedProducts}
        onProductClick={onProductClick}
      />
      <div>
        Pay Now
        <Checkbox
          checked={payNow}
          onChange={() => setPayNow(!payNow)}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
    </>
  );
};

const Cart = memo(
  ({ availableCartProducts, selectedProducts, onProductClick }) => {
    console.log("rendered child");

    const classes = useStyles();

    const selectedProductSet = new Set(selectedProducts);

    return (
      <Paper component="ul" className={classes.root}>
        {availableCartProducts.map((product) => (
          <li key={product}>
            <Chip
              icon={
                selectedProductSet.has(product) ? <TagFacesIcon /> : undefined
              }
              label={product}
              className={classes.chip}
              onClick={() => onProductClick(product)}
            />
          </li>
        ))}
      </Paper>
    );
  }
);

export default Performance;
