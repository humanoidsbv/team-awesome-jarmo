import { useState } from "react";

import { GET_TIME_ENTRIES } from "../src/graphql/time-entries/queries";

import { EntriesProvider } from "../src/components/context/ContextProvider";
import { SubHeader } from "../src/components/sub-header/SubHeader";
import { TimeEntries } from "../src/components/time-entries/TimeEntries";
import * as Types from "../src/types/types";
import { client } from "../src/services/apollo-client/apollo-client";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TIME_ENTRIES,
  });

  return {
    props: {
      initialTimeEntries: data.allTimeEntries,
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
