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

const theme = createTheme({
  palette: {
    primary: {
      main: "#00375c",
    },
    secondary: {
      main: "#002944",
    },
  },
});

function App() {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => console.log(response.data));
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <nav>
          <ResponsiveAppBar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
