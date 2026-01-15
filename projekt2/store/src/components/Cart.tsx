import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Product, type CartInterface } from "./Product";
import { Typography } from "@mui/material";
import { ProductInCart } from "./ProductInCart";

const Cart = () => {
  const existingCart = localStorage.getItem("ProductsInCart");
  console.log(existingCart);

  let cartArray: CartInterface[] = existingCart ? JSON.parse(existingCart) : [];

  const [totalPrice, setTotalPrice] = useState<number>(0);

  let countUpPrice = 0;

  useEffect(() => {
    setTotalPrice(Math.round(countUpPrice * 100) / 100);
  }, [countUpPrice]);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Total cart value: {totalPrice} zł
        <Typography variant="h2">REMOVE FROM CART</Typography>
      </Typography>{" "}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cartArray
          .filter((product) => product.amount > 0)
          .map((product) => {
            countUpPrice = countUpPrice + product.amount * product.price;
            console.log(countUpPrice);
            return (
              <Grid
                key={product.id}
                size={{ xs: 12, sm: 4, md: 4, lg: 3 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ overflow: "hidden" }}>
                  {" "}
                  {/* <Typography variant="h5" sx={{ color: "black" }}>
                  Amount: {product.amount}
                </Typography> */}
                  <ProductInCart {...product} />
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Cart;
