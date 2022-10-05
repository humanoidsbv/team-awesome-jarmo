import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { EntriesProvider } from "../src/components/context/ContextProvider";
import GlobalStyle from "../styles/global";
import { getTimeEntries } from "../src/services/time-entries";
import { Header } from "../src/components/header/Header";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import { theme } from "../styles/theme";
import * as Types from "../src/types/types";

export const getServerSideProps = async () => {
  const initialTimeEntries = await getTimeEntries();

  return {
    props: {
      initialTimeEntries,
    },
  };
};

const Homepage = ({ initialTimeEntries, initialFormValues }: Types.AtBuildProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <ThemeProvider theme={theme}>
      <EntriesProvider
        initialTimeEntries={initialTimeEntries}
        initialFormValues={initialFormValues}
      >
        <GlobalStyle />
        <Header />
        <SubHeader
          title="Timesheets"
          amount={initialTimeEntries.length}
          subtitle="entries"
          handleModal={handleModal}
        />
        <TimeEntries
          initialTimeEntries={initialTimeEntries}
          isModalActive={isModalActive}
          handleModal={handleModal}
          initialFormValues={initialFormValues}
        />
      </EntriesProvider>
    </ThemeProvider>
  );
};

export default Homepage;
