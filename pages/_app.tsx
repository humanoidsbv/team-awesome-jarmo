import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { Header } from "../src/components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
