import { ThemeProvider } from "styled-components";

import { Header } from "../src/components/header/Header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";
import { getTimeEntries } from "../src/services/time-entries";
import * as Types from "../src/types/types";

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  return {
    props: {
      initialTimeEntries,
    },
  };
};

const Homepage = ({ initialTimeEntries }: Types.AtBuildProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SubHeader title="Timesheets" amount={12} subtitle="entries" />
      <TimeEntries initialTimeEntries={initialTimeEntries} />
    </ThemeProvider>
  );
};

export default Homepage;
