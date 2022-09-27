import React, { useState } from "react";
import * as Styled from "./Form.styled";
import { Button } from "../button/Button";

export const Form = () => {
  const [newTimeEntry, setNewTimeEntry] = useState({ client: "", startTime: "", endTime: "" });

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({
      ...newTimeEntry,
      [key]: event.target.value,
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
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
        <Styled.Input type="date" />
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
