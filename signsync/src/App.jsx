import "./index.css";
import { Box } from "@chakra-ui/react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <Box fontFamily="'Inter', sans-serif">
      <Header />
      <Nav />

      <section id="about">
        <Content />
      </section>

      <section id="contact"></section>

      <section id="donate">
        <Footer />
      </section>
    </Box>
  );
}

export default App;