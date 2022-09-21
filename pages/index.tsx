import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SubHeader title="Timesheets" amount={12} subtitle="entries" />
      <TimeEntries />
    </ThemeProvider>
  );
};

export default Homepage;
