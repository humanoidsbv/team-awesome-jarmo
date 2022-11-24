import Homepage from "./HomePage";

import { getTimeEntries } from "../src/services/time-entries";

async function fetchData() {
  const initialTimeEntries = await getTimeEntries();
  return {
    props: {
      initialTimeEntries,
    },
  };
}

export default async function Page() {
  const initialTimeEntries = await fetchData();

  return (
    <div>
      <Homepage initialTimeEntries={initialTimeEntries} />
    </div>
  );
}
