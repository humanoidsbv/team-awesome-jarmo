import { useState } from "react";
import mockTimeEntries from "../../../fixtures/mockTimeEntries";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Styled from "./TimeEntries.styled";

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

  return (
    <>
      <Styled.Main>
        <Styled.DayContainer>
          <Styled.Title>Friday 29-07 Today</Styled.Title>
          <Styled.Title>08:00</Styled.Title>
        </Styled.DayContainer>
        {timeEntries.map((timeEntry) => (
          <TimeEntry
            client={timeEntry.client}
            key={timeEntry.id}
            startTime={timeEntry.startTimestamp}
            stopTime={timeEntry.stopTimestamp}
          />
        ))}
        <button type="button" onClick={handleClick}>
          Add time entry
        </button>
      </Styled.Main>
    </>
  );
};
