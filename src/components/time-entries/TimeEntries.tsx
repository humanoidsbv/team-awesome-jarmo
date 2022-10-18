import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import * as Styled from "./TimeEntries.styled";
import { TimeEntry } from "../time-entry/TimeEntry";
import * as Types from "../../types/types";
import { Modal } from "../modal/Modal";
import { TimeEntryForm } from "../time-entry-form/TimeEntryForm";

import { EntriesContext } from "../context/ContextProvider";
import { REMOVE_TIME_ENTRY } from "../../graphql/time-entries/mutations";
import { GET_TIME_ENTRIES } from "../../graphql/time-entries/queries";

export const TimeEntries = ({ isModalActive, handleModal }: Types.AtBuildProps) => {
  const { timeEntries, setTimeEntries } = useContext(EntriesContext);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortedTimeEntries, setSortedTimeEntries] = useState(timeEntries);
  const [selectedClient, setSelectedClient] = useState("");

  const [removeTimeEntry] = useMutation(REMOVE_TIME_ENTRY, {
    refetchQueries: [{ query: GET_TIME_ENTRIES }],
  });

  const filterClients = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClient(event.target.value);
  };

  const timeClients = timeEntries.map((entry) => entry.client);
  const uniqueClients = Array.from(new Set(timeClients));

  const removeEntry = async (entry: Types.EntryApiProps) => {
    const updatedEntries = timeEntries.filter((timeEntry) => timeEntry.id !== entry.id);
    setTimeEntries(updatedEntries);

    const { id } = entry;

    await removeTimeEntry({
      variables: {
        id,
      },
    });
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
  }, [sortOrder, timeEntries]);

  return (
    <>
      <Styled.Main>
        <Styled.Container>
          <Styled.Label>Filter by client: </Styled.Label>
          <Styled.Select value={selectedClient} onChange={filterClients}>
            <option value="">--Choose a client--</option>
            {uniqueClients.map((entry) => (
              <option value={entry} label={entry} key={entry} />
            ))}
          </Styled.Select>
          <Styled.Label>Sort by Date:</Styled.Label>
          <Styled.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option disabled value="">
              --Select option--
            </option>
            {sortOptions.map((label) => (
              <option key={label} label={label} value={label}>
                {label}
              </option>
            ))}
          </Styled.Select>
        </Styled.Container>
        {sortedTimeEntries
          .filter((entry) => selectedClient === "" || entry.client === selectedClient)
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
