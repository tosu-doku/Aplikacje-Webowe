import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Product, type ProductInterface, type CartInterface } from "./Product";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Products = () => {
  const [data, setData] = useState<ProductInterface[]>([]);
  const [cartItems, setCartItems] = useState<CartInterface[]>([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const existingCart = localStorage.getItem("ProductsInCart");
    if (existingCart) {
      setCartItems(JSON.parse(existingCart));
    }
  }, []);

  const handleAddToCart = (productAdded: ProductInterface) => {
    const newCart = [...cartItems];
    const index = newCart.findIndex((item) => item.id === productAdded.id);
    if (index !== -1) {
      newCart[index].amount += 1;
      console.log("dodano: ", productAdded.title);
    } else {
      newCart.push({ ...productAdded, amount: 1 });
      console.log("nowy: ", productAdded.title);
    }

    localStorage.setItem("ProductsInCart", JSON.stringify(newCart));
    setCartItems(newCart);

    setSnackbarMessage(`added to cart: ${productAdded.title}`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const params = useParams();
  const filterBy = params.filter;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      console.log("filter by:", filterBy);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {" "}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data
          .filter((product) => product.category === filterBy || !filterBy)
          .map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 4, md: 4, lg: 3 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Product {...product} onAdd={handleAddToCart} />
            </Grid>
          ))}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          variant="filled"
          onClose={handleCloseSnackbar}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;
