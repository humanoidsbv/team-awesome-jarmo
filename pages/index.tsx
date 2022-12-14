import { useState } from "react";
import { EntriesProvider } from "../src/components/context/ContextProvider";
import { getTimeEntries } from "../src/services/time-entries";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
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
    <EntriesProvider initialTimeEntries={initialTimeEntries}>
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
  );
};

export default Homepage;
