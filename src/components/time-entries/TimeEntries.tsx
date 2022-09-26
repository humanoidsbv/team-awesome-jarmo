import { useState, useEffect } from "react";
import { EntryProps } from "../../types/types";
import { ErrorScreen } from "../error-screen/ErrorScreen";
import { getTimeEntries } from "../../services/time-entries";
import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";

export const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<EntryProps[]>([]);
  const [dataError, setDataError] = useState(false);

  async function fetchTimeEntries() {
    const awaitTimeEntries = await getTimeEntries();

    if (awaitTimeEntries instanceof Error) {
      setDataError(true);
      return;
    }

    setTimeEntries(awaitTimeEntries);
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
        {dataError && <ErrorScreen />}
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
