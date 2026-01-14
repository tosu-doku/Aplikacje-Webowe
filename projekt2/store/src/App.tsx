import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  // useParams,
  // useNavigate,
} from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import About from "./components/About";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
// import { Product } from "./components/Product";
import Products from "./components/Products";

declare module "@mui/material/styles" {
  // dodanie własnego koloru special blue
  interface Palette {
    specialBlue: Palette["primary"]; // Mówimy: specialBlue zachowuje się jak primary
  }
  interface PaletteOptions {
    specialBlue?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#00375c",
      light: "#4b98d6ff",
      dark: "#1d73baff",
    },
    secondary: {
      main: "#002944",
    },
    specialBlue: {
      main: "#002944",
      contrastText: "#000000", // Kolor tekstu na tym tle
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <nav>
          <ResponsiveAppBar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
