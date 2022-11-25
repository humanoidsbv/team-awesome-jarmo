"use client";

import { ThemeProvider, ServerStyleSheet } from "styled-components";
import Document, { DocumentContext } from "next/document";
import { ReactNode } from "react";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { Header } from "../src/components/header/Header";

export class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
