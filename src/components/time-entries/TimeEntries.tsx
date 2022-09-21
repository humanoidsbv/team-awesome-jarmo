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
        startTimestamp: "2022-09-21T16:00:00.000Z",
        stopTimestamp: "2022-09-21T22:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      <Styled.Main>
        {timeEntries
          .sort(
            (a, b) => new Date(b.startTimestamp).valueOf() - new Date(a.startTimestamp).valueOf(),
          )
          .map((timeEntry, i, arr) => {
            const currentDay = new Date(timeEntry.startTimestamp).toLocaleDateString("en-EN", {
              weekday: "long",
              day: "numeric",
              month: "numeric",
            });

            const currentDate = new Date(timeEntry.startTimestamp).toLocaleDateString();

            const previousDate = new Date(arr[i - 1]?.startTimestamp).toLocaleDateString();

            return (
              <>
                {previousDate !== currentDate && (
                  <Styled.DayContainer>
                    <Styled.Title>{currentDay}</Styled.Title>
                    <Styled.Title>08:00</Styled.Title>
                  </Styled.DayContainer>
                )}
                <TimeEntry
                  client={timeEntry.client}
                  key={timeEntry.id}
                  startTime={timeEntry.startTimestamp}
                  stopTime={timeEntry.stopTimestamp}
                />
              </>
            );
          })}

        <button type="button" onClick={handleClick}>
          Add time entry
        </button>
      </Styled.Main>
    </>
  );
};
