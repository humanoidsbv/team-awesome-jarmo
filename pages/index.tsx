import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { getTimeEntries } from "../src/services/time-entries";
import * as Types from "../src/types/types";

export const getServerSideProps = async () => {
  const timeEntriesAtBuild = await getTimeEntries();

  return {
    props: {
      timeEntriesAtBuild,
    },
  };
};

const Homepage = ({ timeEntriesAtBuild }: Types.AtBuildProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SubHeader title="Timesheets" amount={12} subtitle="entries" />
      <TimeEntries timeEntriesAtBuild={timeEntriesAtBuild} />
    </ThemeProvider>
  );
};

export default Homepage;
