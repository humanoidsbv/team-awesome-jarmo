import React, { useState, Dispatch } from "react";
import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button/Button";
import { EntryProps } from "../../types/types";

interface FormProps {
  timeEntries: EntryProps[];
  setTimeEntries: Dispatch<EntryProps[]>;
  handleModal: () => void;
}

export const TimeEntryForm = ({ timeEntries, setTimeEntries, handleModal }: FormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState({
    client: "",
    startTime: "",
    endTime: "",
    date: "",
  });

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({
      ...newTimeEntry,
      [key]: event.target.value,
    });
  };

  const formatTime = (date: string, time: string) => {
    const formattedDate = new Date(
      // eslint-disable-next-line prefer-template
      `${date.toLocaleString() + "T" + time.toLocaleString() + ":00.000Z"}`,
    );

    return formattedDate;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTimeEntries([
      ...timeEntries,
      {
        ...newTimeEntry,
        id: Math.random(),
        startTime: `${formatTime(newTimeEntry.date, newTimeEntry.startTime)}`,
        endTime: `${formatTime(newTimeEntry.date, newTimeEntry.endTime)}`,
      },
    ]);
    handleModal();
    setNewTimeEntry({});
  };

  return (
    <Styled.Form>
      <Styled.Label>
        Client
        <Styled.Input
          name="client"
          type="text"
          value={newTimeEntry.client ?? ""}
          onChange={(event) => handleChange("client", event)}
        />
      </Styled.Label>
      <Styled.Label>
        Activity
        <Styled.Input type="text" />
      </Styled.Label>

      <Styled.Label>
        Date
        <Styled.Input
          type="date"
          value={newTimeEntry.date ?? ""}
          onChange={(event) => handleChange("date", event)}
        />
      </Styled.Label>
      <Styled.FormContainer>
        <Styled.Label>
          From
          <Styled.Input
            type="time"
            name="startTime"
            value={newTimeEntry.startTime ?? ""}
            onChange={(event) => handleChange("startTime", event)}
          />
        </Styled.Label>
        <Styled.Label>
          To
          <Styled.Input
            type="time"
            name="endTime"
            value={newTimeEntry.endTime ?? ""}
            onChange={(event) => handleChange("endTime", event)}
          />
        </Styled.Label>
        <Styled.LabelTotal>
          Total <Styled.Hours>08:00</Styled.Hours>
        </Styled.LabelTotal>
      </Styled.FormContainer>
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" />
        <Button label="new time entry" onClick={handleSubmit} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
