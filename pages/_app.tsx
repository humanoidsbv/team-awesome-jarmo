import React from "react";
import { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { client } from "../src/services/apollo-client/apollo-client";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { Header } from "../src/components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
