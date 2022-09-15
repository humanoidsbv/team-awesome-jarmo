import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SubHeader message="test" />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
