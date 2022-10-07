import React from "react";
import { Button } from "../button/Button";

import * as Styled from "./TeamMemberForm.styled";

export const TeamMemberForm = () => {
  return (
    <Styled.Form>
      <Styled.AvatarWrapper>
        <Styled.Avatar alt="avatar" src="/images/avatar.png" />
        <Styled.Title>Edit Avatar</Styled.Title>
      </Styled.AvatarWrapper>
      <Styled.InputContainer>
        <Styled.Label>
          First name
          <Styled.Input />
        </Styled.Label>
        <Styled.Label>
          Last name
          <Styled.Input />
        </Styled.Label>
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Styled.Label>
          E-mail adress
          <Styled.Input />
        </Styled.Label>
        <Styled.Label>
          Label
          <Styled.Input />
        </Styled.Label>
        <Styled.Label>
          Current Client
          <Styled.Input />
        </Styled.Label>
      </Styled.InputContainer>
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" />
        <Button label="Add Humanoid" />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
