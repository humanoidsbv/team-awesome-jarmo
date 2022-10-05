import React, { useState, Dispatch, useRef } from "react";
import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button/Button";
import { EntryApiProps, EntryFormProps } from "../../types/types";
import { postTimeEntries } from "../../services/time-entries/post-time-entries";

interface FormProps {
  timeEntries: EntryApiProps[];
  setTimeEntries: Dispatch<EntryFormProps[]>;
  handleModal: () => void;
}

const initialFormValues = {
  activity: "",
  client: "",
  startTime: "",
  endTime: "",
  date: "",
};

export const TimeEntryForm = ({ timeEntries, setTimeEntries, handleModal }: FormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<EntryFormProps>(initialFormValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleBlur = () => {
    setIsFormValid(formRef.current?.checkValidity() || false);
  };

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({
      ...newTimeEntry,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const formattedTimeEntry: EntryApiProps = {
      client: newTimeEntry.client,
      startTime: `${newTimeEntry.date}T${newTimeEntry.startTime}:00.000Z`,
      endTime: `${newTimeEntry.date}T${newTimeEntry.endTime}:00.000Z`,
      activity: newTimeEntry.activity,
    };

    const postedTimeEntry = await postTimeEntries(formattedTimeEntry);

    setTimeEntries([...timeEntries, postedTimeEntry]);
    setNewTimeEntry(initialFormValues);
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
          onBlur={handleBlur}
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
          required
          onBlur={handleBlur}
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
            required
            onBlur={handleBlur}
          />
        </Styled.Label>
        <Styled.Label>
          To
          <Styled.Input
            type="time"
            name="endTime"
            value={newTimeEntry.endTime ?? ""}
            onChange={(event) => handleChange("endTime", event)}
            required
            onBlur={handleBlur}
          />
        </Styled.Label>
        <Styled.LabelTotal>
          Total <Styled.Hours>08:00</Styled.Hours>
        </Styled.LabelTotal>
      </Styled.FormContainer>
      {!isFormValid && <Styled.Span>* You must fill in all of the fields!</Styled.Span>}

      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" onClick={handleModal} />
        <Button label="new time entry" disabled={!isFormValid} onClick={handleSubmit} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
