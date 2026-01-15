import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";

const CategoriesForSelection = () => {
  const productCategories = [
    "women's clothing",
    "men's clothing",
    "jewelery",
    "electronics",
    "",
  ];
  return (
    <Box>
      {productCategories.map((category) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            key={category != "" ? category : "all collections"}
            component={Link}
            to={category != "" ? `/products/${category}` : "/products"}
            sx={{
              fontSize: 20,
              border: 3,
              borderColor: "white",
              borderRadius: 2,
              m: 2,
              p: 2,
              bgcolor: "primary.light",
              ":hover": {
                boxShadow: 16,
                bgcolor: "primary.dark",
                color: "white",
              },
            }}
            variant="contained"
          >
            {category != "" ? category : "all collections"}
          </Button>
        </Grid>
      ))}
    </Box>
  );
};

export default CategoriesForSelection;
