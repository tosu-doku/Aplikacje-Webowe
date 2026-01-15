import { useState } from "react";

import { Alert, Box, Snackbar, Tooltip, Typography } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { pink } from "@mui/material/colors";

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

interface ProductInterfaceWithAdd extends ProductInterface {
  onAdd: (product: ProductInterface) => void;
}

const Product = (productWithAdd: ProductInterfaceWithAdd) => {
  const { onAdd, ...product } = productWithAdd;

  return (
    <Tooltip
      title={product.description}
      arrow
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: "primary.main",
            fontSize: 14,
          },
        },
        arrow: {
          sx: {
            color: "primary.main", // 3. Kolor samej strzałki (musi pasować do tła)
          },
        },
      }}
    >
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
            <AddShoppingCartIcon
              onClick={() => onAdd(product)}
              sx={{
                color: pink[500],
                border: 2,
                bordercolor: "primary.main",
                borderRadius: 2,
                px: 2,
                py: 0.5,
                transition: "0.3s",
                ":hover": {
                  boxShadow: 4,
                  bgcolor: pink[500],
                  color: "black",
                },
              }}
            />
          </Box>
        </Box>
        {/* <Box className="ProductDescription" sx={{ my: 2, mx: 1 }}>
        <Typography variant="body1">{product.description}</Typography>
      </Box> */}

        <Box className="ProductRating"></Box>

        {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alertVisible}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleClose}
          sx={{ width: "80%" }}
        >
          Dodano do koszyka: {product.title}
        </Alert>
      </Snackbar> */}
      </Box>
    </Tooltip>
  );
};

export { Product };
export type { ProductInterface, CartInterface };
