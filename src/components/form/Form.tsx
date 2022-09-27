import * as Styled from "./Form.styled";
import { Button } from "../button/Button";

export const Form = () => {
  return (
    <Styled.Form>
      <Styled.Label>
        Client
        <Styled.Input name="client" type="text" />
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
          <Styled.Input type="time" />
        </Styled.Label>
        <Styled.Label>
          To
          <Styled.Input type="time" />
        </Styled.Label>
        <Styled.LabelTotal>Total</Styled.LabelTotal>
      </Styled.FormContainer>
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" />
        <Button label="new time entry" />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
