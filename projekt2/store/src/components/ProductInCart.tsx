import { Alert, Box, Snackbar, Typography } from "@mui/material";
import type {
  SnackbarCloseReason,
  SnackbarOrigin,
} from "@mui/material/Snackbar";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Rating {
  rate: number;
  count: number;
}

interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface CartInterface extends ProductInterface {
  amount: number;
}

const ProductInCart = (product: CartInterface) => {
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertVisible(false);
  };

  const handleRemoveItem = () => {
    const existingCart = localStorage.getItem("ProductsInCart");

    let cartArray: CartInterface[] = existingCart
      ? JSON.parse(existingCart)
      : [];

    const existingProductIndex = cartArray.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cartArray[existingProductIndex].amount -= 1;
      console.log("removed item from cart: ", product.title);
    } else {
      console.log("user trying to remove an item not in cart: ", product.title);
    }

    localStorage.setItem("ProductsInCart", JSON.stringify(cartArray));
    setAlertVisible(true);
  };
  return (
    <Box
      className="Product"
      // onClick={handleProductClick}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: 2,
        borderColor: "primary.main",
        borderRadius: 3,
        bgcolor: "white",
        overflow: "hidden",
        transition: "0.3s",
        ":hover": {
          boxShadow: 16,
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        className="ProductImage"
        sx={{
          height: 240,
          width: "100%",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          bgcolor: "white",
          p: 2,
        }}
      >
        <img
          width={"100%"}
          src={product.image}
          alt={product.title}
          style={{ maxWidth: "95%", maxHeight: "100%", objectFit: "contain" }}
        ></img>
      </Box>

      <Box
        className="ProductTitle"
        sx={{
          p: 1,
          m: 2,
          border: 2,
          borderColor: "primary.light",
          borderRadius: 2,
          color: "black",
          fontSize: 30,
          // overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
          {product.title}
        </Typography>

        <Box
          className="ProductPrice&Cart"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Price: {product.price} zł</Typography>
          <RemoveShoppingCartIcon
            onClick={handleRemoveItem}
            sx={{
              color: "red",
              border: 2,
              bordercolor: "primary.main",
              borderRadius: 2,
              px: 2,
              py: 0.5,
              transition: "0.3s",
              ":hover": {
                boxShadow: 4,
                bgcolor: "red",
                color: "black",
              },
            }}
          />
        </Box>
        <Typography sx={{ color: "black" }}>
          {product.amount ? `Amount in Cart: ${product.amount}` : ""}
        </Typography>
      </Box>

      <Box className="ProductRating"></Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={alertVisible}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={handleClose}
          sx={{ width: "80%" }}
        >
          Usunięto z koszyka: {product.title}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export { ProductInCart };
export type { CartInterface };
