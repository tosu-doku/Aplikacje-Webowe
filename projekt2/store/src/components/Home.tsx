import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CategoriesForSelection from "./CategoriesForSelection";

const Home = () => {
  return (
    <Container sx={{ bgcolor: "primary.main", pt: 1 }}>
      <Box
        className="welcome-text"
        sx={{
          border: 3,
          borderRadius: 2,
          mx: 2,
          mt: 1,
          p: 1.5,
          bgcolor: "secondary.main",
          mb: 5,
          borderBottomStyle: "dashed",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 50,
            }}
          >
            Welcome{" "}
          </Box>{" "}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {" "}
        to our online store, where you can browse all kinds of products!
      </Typography>
      <br />
      <CategoriesForSelection />
    </Container>
  );
};

export default Home;
