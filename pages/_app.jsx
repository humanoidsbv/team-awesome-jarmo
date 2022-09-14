import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

import Header from "../src/components/header";
import { theme } from "../styles/theme";

function MyApp() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
