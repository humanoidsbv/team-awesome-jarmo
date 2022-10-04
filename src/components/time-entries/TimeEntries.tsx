import { useState } from "react";
import { EntryProps } from "../../types/types";
import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Types from "../../types/types";
import { Modal } from "../modal/Modal";
import { TimeEntryForm } from "../time-entry-form/TimeEntryForm";
import { deleteTimeEntries } from "../../services/time-entries/delete-time-entries";

export const TimeEntries = ({
  initialTimeEntries,
  isModalActive,
  handleModal,
}: Types.AtBuildProps) => {
  const [timeEntries, setTimeEntries] = useState<EntryProps[]>(initialTimeEntries);

  const removeEntry = (entry: EntryProps) => {
    const updatedEntries = timeEntries.filter((timeEntry) => timeEntry.id !== entry.id);

    setTimeEntries(updatedEntries);
    deleteTimeEntries(entry);
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
                  removeEntry={() => removeEntry(timeEntry)}
                />
              </div>
            );
          })}
        <Modal isActive={isModalActive} onClose={() => handleModal()}>
          <TimeEntryForm
            timeEntries={timeEntries}
            setTimeEntries={setTimeEntries}
            handleModal={handleModal}
          />
        </Modal>
      </Styled.Main>
    </>
  );
};
