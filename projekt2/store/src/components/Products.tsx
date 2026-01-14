import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Product, type ProductInterface } from "./Product";

const Products = () => {
  const [data, setData] = useState<ProductInterface[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
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
        {data.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 4, md: 4, lg: 3 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
