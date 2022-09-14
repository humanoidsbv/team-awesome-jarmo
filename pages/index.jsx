import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
