import React, { useState, Dispatch, useRef } from "react";
import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button/Button";
import { EntryProps } from "../../types/types";
import { postTimeEntries } from "../../services/time-entries/postTimeEntries";

interface FormProps {
  timeEntries: EntryProps[];
  setTimeEntries: Dispatch<EntryProps[]>;
  handleModal: () => void;
}

const entryObject = {
  client: "",
  startTime: "",
  endTime: "",
  date: "",
  id: "",
};

export const TimeEntryForm = ({ timeEntries, setTimeEntries, handleModal }: FormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<EntryProps>(entryObject);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({
      ...newTimeEntry,
      [key]: event.target.value,
    });
  };

  // const formatTime = (date: string, time: string) => {
  //   const formattedDate = new Date(`${date}T${time}:00.000Z`);
  //   console.log(formattedDate);
  //   return formattedDate;
  // };

  const handleSubmit = async () => {
    const formattedTimeEntry = {
      client: newTimeEntry.client,
      startTime: `${newTimeEntry.date}T${newTimeEntry.startTime}:00.000Z`,
      endTime: `${newTimeEntry.date}T${newTimeEntry.endTime}:00.000Z`,
      activity: "development",
    };

    const postedTimeEntry = await postTimeEntries(formattedTimeEntry);

    setTimeEntries([...timeEntries, postedTimeEntry]);
    setNewTimeEntry(entryObject);
    handleModal();
  };

  return (
    <Styled.Form ref={formRef}>
      <Styled.Label>
        Client
        <Styled.Input
          name="client"
          type="text"
          value={newTimeEntry.client ?? ""}
          onChange={(event) => handleChange("client", event)}
          required
        />
        <Styled.ErrorMessage>* This field is required!</Styled.ErrorMessage>
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
          required
        />
        <Styled.ErrorMessage>* This field is required!</Styled.ErrorMessage>
      </Styled.Label>
      <Styled.FormContainer>
        <Styled.Label>
          From
          <Styled.Input
            type="time"
            name="startTime"
            value={newTimeEntry.startTime ?? ""}
            onChange={(event) => handleChange("startTime", event)}
            required
          />
          <Styled.ErrorMessage>* This field is required!</Styled.ErrorMessage>
        </Styled.Label>
        <Styled.Label>
          To
          <Styled.Input
            type="time"
            name="endTime"
            value={newTimeEntry.endTime ?? ""}
            onChange={(event) => handleChange("endTime", event)}
            required
          />
          <Styled.ErrorMessage>* This field is required!</Styled.ErrorMessage>
        </Styled.Label>
        <Styled.LabelTotal>
          Total <Styled.Hours>08:00</Styled.Hours>
        </Styled.LabelTotal>
      </Styled.FormContainer>
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" onClick={handleModal} />
        <Button label="new time entry" onClick={handleSubmit} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
