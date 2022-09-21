import { useState, useEffect } from "react";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Styled from "./TimeEntries.styled";
import * as Types from "../../types/types";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<Types.EntryProps[]>([]);

  async function getTimeEntries(): Promise<Types.EntryProps[]> {
    const response = await fetch("http://localhost:3004/time-entries", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

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
          .sort((a, b) => new Date(b.startTime).valueOf() - new Date(a.startTime).valueOf())
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
              <>
                {previousDate !== currentDate && (
                  <Styled.DayContainer>
                    <Styled.Title>{currentDate}</Styled.Title>
                    <Styled.Title>08:00</Styled.Title>
                  </Styled.DayContainer>
                )}
                <TimeEntry
                  client={timeEntry.client}
                  key={timeEntry.id}
                  startTime={timeEntry.startTime}
                  stopTime={timeEntry.endTime}
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
