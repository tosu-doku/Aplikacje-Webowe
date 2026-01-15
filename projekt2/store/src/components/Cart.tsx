import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Product, type ProductInterface } from "./Product";
import { Alert, Snackbar, Typography } from "@mui/material";
import { ProductInCart } from "./ProductInCart";
import { Link } from "react-router-dom";

interface CartInterface extends ProductInterface {
  amount: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartInterface[]>([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const existingCart = localStorage.getItem("ProductsInCart");
    if (existingCart) {
      setCartItems(JSON.parse(existingCart));
    }
  }, []);

  let totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  totalPrice = Math.round(totalPrice * 100) / 100;

  const handleRemoveFromCart = (id: number, title: string) => {
    const newCart = [...cartItems];
    const index = newCart.findIndex((item) => item.id === id);

    if (index !== -1) {
      if (newCart[index].amount > 1) {
        newCart[index].amount -= 1;
      } else {
        newCart.splice(index, 1);
      }

      localStorage.setItem("ProductsInCart", JSON.stringify(newCart));

      setCartItems(newCart);

      setSnackbarMessage(`deleted from cart: ${title}`);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Total cart value: {totalPrice} zł
      </Typography>{" "}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cartItems.length > 0 ? (
          cartItems
            .filter((product) => product.amount > 0)
            .map((product) => {
              return (
                <Grid
                  key={product.id}
                  size={{ xs: 12, sm: 4, md: 4, lg: 3 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <ProductInCart {...product} onRemove={handleRemoveFromCart} />
                </Grid>
              );
            })
        ) : (
          <Typography
            sx={{
              fontSize: 20,
              border: 3,
              borderColor: "white",
              borderRadius: 2,
              m: 2,
              p: 2,
              bgcolor: "primary.main",
            }}
          >
            No items to display, head to <Link to="../products">products</Link>{" "}
            to add something to your cart
          </Typography>
        )}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          severity="error"
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

export default Cart;
