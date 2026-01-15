import { Alert, Box, Snackbar, Typography } from "@mui/material";
import type {
  SnackbarCloseReason,
  SnackbarOrigin,
} from "@mui/material/Snackbar";

import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import type { ProductInterface } from "./Product";

interface CartInterfaceWithRemove extends ProductInterface {
  amount: number;
  onRemove: (id: number, title: string) => void;
}

const ProductInCart = (productWithRemove: CartInterfaceWithRemove) => {
  const { onRemove, ...product } = productWithRemove;

  return (
    <Box
      className="Product"
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
            onClick={() => onRemove(product.id, product.title)}
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
    </Box>
  );
};

export { ProductInCart };
