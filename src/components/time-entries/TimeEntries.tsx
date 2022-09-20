import { useState } from "react";
import mockTimeEntries from "../../../fixtures/mockTimeEntries";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Styled from "./TimeEntries.styled";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);

  const date = new Date();

  const weekday = date;
  const today = weekday.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Port of Rotterdam",
        startTimestamp: "2022-09-24T16:00:00.000Z",
        stopTimestamp: "2022-09-24T22:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      <Styled.Main>
        <Styled.DayContainer>
          <Styled.Title>{today}</Styled.Title>
          <Styled.Title>08:00</Styled.Title>
        </Styled.DayContainer>
        {timeEntries.map((timeEntry, index) => {
          const startDate = new Date(timeEntry.startTimestamp);
          const endDate = new Date(timeEntry.stopTimestamp);

          const dateIsDifferent = startDate.getDate() === endDate.getDate();

          `${dateIsDifferent} ? <div>Insert new Date</div> : " "`;

          return (
            <TimeEntry
              client={timeEntry.client}
              key={timeEntry.id}
              startTime={timeEntry.startTimestamp}
              stopTime={timeEntry.stopTimestamp}
            />
          );
        })}
        <button type="button" onClick={handleClick}>
          Add time entry
        </button>
      </Styled.Main>
    </>
  );
};
