import { useContext, useEffect, useState } from "react";
import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Types from "../../types/types";
import { Modal } from "../modal/Modal";
import { TimeEntryForm } from "../time-entry-form/TimeEntryForm";
import { deleteTimeEntries } from "../../services/time-entries/delete-time-entries";
import { EntriesContext } from "../context/ContextProvider";

export const TimeEntries = ({ isModalActive, handleModal }: Types.AtBuildProps) => {
  const { timeEntries, setTimeEntries } = useContext(EntriesContext);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortedTimeEntries, setSortedTimeEntries] = useState(timeEntries);

  const removeEntry = (entry: Types.EntryApiProps) => {
    const updatedEntries = timeEntries.filter((timeEntry) => timeEntry.id !== entry.id);

    setTimeEntries(updatedEntries);
    deleteTimeEntries(entry);
  };

  const sortOptions = ["ascending", "descending"];

  const handleSort = () => {
    const sort = timeEntries.sort((a, b) => {
      if (a.startTime < b.startTime) {
        return sortOrder === "ascending" ? 1 : -1;
      }
      if (a.startTime > b.startTime) {
        return sortOrder === "ascending" ? -1 : 1;
      }
      return 0;
    });

    setSortedTimeEntries(sort);
  };

  useEffect(() => {
    handleSort();
  }, [sortOrder]);

  return (
    <>
      <Styled.Main>
        <Styled.Container>
          <Styled.Label>Sort by Date:</Styled.Label>
          <Styled.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option disabled value="">
              --Select option--
            </option>
            {sortOptions.map((label, i) => (
              <option key={label + i} label={label} value={label}>
                {label}
              </option>
            ))}
          </Styled.Select>
        </Styled.Container>
        {sortedTimeEntries.map((timeEntry, i, arr) => {
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
        <Modal isActive={isModalActive} title="New Time Entry" onClose={() => handleModal()}>
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
