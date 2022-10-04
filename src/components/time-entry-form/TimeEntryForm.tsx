import React, { useState, Dispatch, useRef } from "react";
import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button/Button";
import { EntryProps } from "../../types/types";
import { postTimeEntries } from "../../services/time-entries/post-time-entries";

interface FormProps {
  timeEntries: EntryProps[];
  setTimeEntries: Dispatch<EntryProps[]>;
  handleModal: () => void;
}

const entryObject = {
  activity: "",
  client: "",
  startTime: "",
  endTime: "",
  date: "",
  id: "",
};

export const TimeEntryForm = ({ timeEntries, setTimeEntries, handleModal }: FormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<EntryProps>(entryObject);
  const [isFormValid, setIsFormValid] = useState(true);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({
      ...newTimeEntry,
      [key]: event.target.value,
    });
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(event.target.checkValidity());
  };

  const handleSubmit = async () => {
    const formattedTimeEntry = {
      client: newTimeEntry.client,
      startTime: `${newTimeEntry.date}T${newTimeEntry.startTime}:00.000Z`,
      endTime: `${newTimeEntry.date}T${newTimeEntry.endTime}:00.000Z`,
      activity: newTimeEntry.activity,
      id: "",
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
          minLength={3}
          maxLength={20}
          name="client"
          type="text"
          value={newTimeEntry.client ?? ""}
          onBlur={handleBlur}
          onChange={(event) => handleChange("client", event)}
          required
        />
        {!isFormValid && <Styled.Span>* This field is required!</Styled.Span>}
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
          onBlur={handleBlur}
          onChange={(event) => handleChange("date", event)}
          required
        />
        {!isFormValid && <Styled.Span>* This field is required!</Styled.Span>}
      </Styled.Label>
      <Styled.FormContainer>
        <Styled.Label>
          From
          <Styled.Input
            type="time"
            name="startTime"
            value={newTimeEntry.startTime ?? ""}
            onBlur={handleBlur}
            onChange={(event) => handleChange("startTime", event)}
            required
          />
          {!isFormValid && <Styled.Span>* This field is required!</Styled.Span>}
        </Styled.Label>
        <Styled.Label>
          To
          <Styled.Input
            type="time"
            name="endTime"
            value={newTimeEntry.endTime ?? ""}
            onBlur={handleBlur}
            onChange={(event) => handleChange("endTime", event)}
            required
          />
          {!isFormValid && <Styled.Span>* This field is required!</Styled.Span>}
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
