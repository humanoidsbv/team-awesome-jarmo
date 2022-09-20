import { useState } from "react";
import mockTimeEntries from "../../../fixtures/mockTimeEntries";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Styled from "./TimeEntries.styled";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const date = new Date();
  const formattedTime = date.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  // eslint-disable-next-line no-console
  console.log(date);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Port of Rotterdam",
        startTimestamp: formattedTime,
        stopTimestamp: formattedTime,
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
