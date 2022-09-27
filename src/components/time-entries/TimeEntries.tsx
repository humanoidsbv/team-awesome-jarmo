import { useState } from "react";
import { EntryProps } from "../../types/types";
import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Types from "../../types/types";

export const TimeEntries = ({ initialTimeEntries }: Types.AtBuildProps) => {
  const [timeEntries, setTimeEntries] = useState<EntryProps[]>(initialTimeEntries);

  const handleClick = () => {
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: "Port of Rotterdam",
        startTime: "2022-09-21T16:00:00.000Z",
        endTime: "2022-09-21T22:00:00.000Z",
      },
    ]);
  };

  return (
    <>
      <Styled.Main>
        {timeEntries
          ?.sort((a, b) => new Date(b.startTime).valueOf() - new Date(a.startTime).valueOf())
          .map((timeEntry, i, arr) => {
            const currentDate = new Date(timeEntry.startTime).toLocaleDateString("en-EN", {
              weekday: "long",
              day: "numeric",
              month: "numeric",
            });

            const previousDate = new Date(arr[i - 1]?.startTime).toLocaleDateString("en-EN", {
              weekday: "long",
              day: "numeric",
              month: "numeric",
            });

            return (
              <div key={timeEntry.id}>
                {previousDate !== currentDate && (
                  <Styled.DayContainer>
                    <Styled.Title>{currentDate}</Styled.Title>
                    <Styled.Title>08:00</Styled.Title>
                  </Styled.DayContainer>
                )}
                <TimeEntry
                  client={timeEntry.client}
                  startTime={timeEntry.startTime}
                  stopTime={timeEntry.endTime}
                />
              </div>
            );
          })}

        <button type="button" onClick={handleClick}>
          Add time entry
        </button>
      </Styled.Main>
    </>
  );
};
