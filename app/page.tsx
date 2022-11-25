import Homepage from "./HomePage";

import { getTimeEntries } from "../src/services/time-entries";

async function fetchData() {
  const initialTimeEntries = await getTimeEntries();
  return initialTimeEntries instanceof Error ? [] : initialTimeEntries;
}

const Page = async () => {
  const initialTimeEntries = await fetchData();

  return <Homepage initialTimeEntries={initialTimeEntries} />;
};

export default Page;
