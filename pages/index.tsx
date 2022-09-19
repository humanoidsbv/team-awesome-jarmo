import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <SubHeader title="Timesheets" amount={12} subtitle="entries" />
      </ThemeProvider>
    </>
  );
};

export default Homepage;
