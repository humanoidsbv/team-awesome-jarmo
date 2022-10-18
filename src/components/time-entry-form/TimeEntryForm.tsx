import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button/Button";
import { EntryFormProps } from "../../types/types";
import { ADD_TIME_ENTRY } from "../../graphql/time-entries/mutations";
import { GET_TIME_ENTRIES } from "../../graphql/time-entries/queries";
import * as Types from "../../types/types";

const initialFormValues = {
  activity: "",
  client: "",
  startTime: "",
  endTime: "",
  date: "",
};

export const TimeEntryForm = ({ handleModal, timeEntries, setTimeEntries }: Types.FormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<EntryFormProps>(initialFormValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const [createTimeEntry] = useMutation(ADD_TIME_ENTRY);

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
    const { client } = newTimeEntry;
    const startTime = `${newTimeEntry.date}T${newTimeEntry.startTime}:00.000Z`;
    const endTime = `${newTimeEntry.date}T${newTimeEntry.endTime}:00.000Z`;
    const { activity } = newTimeEntry;

    await createTimeEntry({
      variables: {
        client,
        startTime,
        endTime,
        activity,
      },
    });
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
