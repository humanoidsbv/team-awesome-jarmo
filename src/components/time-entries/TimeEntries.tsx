import { useState } from "react";
import mockTimeEntries from "../../../fixtures/mockTimeEntries";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Port of Rotterdam",
        startTimestamp: "2022-09-26T16:00:00.000Z",
        stopTimestamp: "2022-09-26T18:00:00.000Z",
      },
    ]);
  };

  return timeEntries.map((timeEntry) => (
    <>
      <TimeEntry client={timeEntry.client} key={timeEntry.id} />
      <button type="button" onClick={handleClick}>
        Add time entry
      </button>
    </>
  ));
};
