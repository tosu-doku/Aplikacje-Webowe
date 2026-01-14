import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Box
        className="welcome-text"
        sx={{
          border: 3,
          borderRadius: 2,
          m: 2,
          p: 2,
          bgcolor: "secondary.main",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 50,
            }}
          >
            Hello and Welcome{" "}
          </Box>{" "}
          to our online store, here you can browse all kinds of products!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
