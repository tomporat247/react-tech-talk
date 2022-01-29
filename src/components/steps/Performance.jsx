import { memo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Chip, FormControlLabel, Paper } from "@material-ui/core";
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
      <FormControlLabel
        control={
          <Checkbox
            checked={payNow}
            onChange={() => setPayNow(!payNow)}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Pay Now"
      />
    </>
  );
};

const Cart = memo(
  ({ availableCartProducts, selectedProducts, onProductClick }) => {
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
