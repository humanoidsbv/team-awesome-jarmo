import React, { useState, Dispatch, useRef } from "react";

import { Button } from "../button/Button";
import { TeamApiProps, TeamFormProps } from "../../types/types";
import * as Styled from "./TeamMemberForm.styled";
import { postTeamMembers } from "../../services/team-members";

interface FormInputProps {
  teamMembers: TeamApiProps[];
  setTeamMembers: Dispatch<TeamFormProps[]>;
  handleModal: () => void;
}

const initialFormValues = {
  client: "",
  email: "",
  firstname: "",
  lastname: "",
};

export const TeamMemberForm = ({ teamMembers, setTeamMembers, handleModal }: FormInputProps) => {
  const [newTeamMember, setNewTeamMember] = useState<TeamFormProps>(initialFormValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleBlur = () => {
    setIsFormValid(formRef.current?.checkValidity() || false);
  };

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({
      ...newTeamMember,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const formattedTeamMember: TeamApiProps = {
      firstname: newTeamMember.firstname,
      lastname: newTeamMember.lastname,
      email: newTeamMember.email,
      client: newTeamMember.client,
    };

    const postedTeamMember = await postTeamMembers(formattedTeamMember);

    setTeamMembers([...teamMembers, postedTeamMember]);
    setNewTeamMember(initialFormValues);
    handleModal();
  };
  return (
    <Styled.Form ref={formRef}>
      <Styled.AvatarWrapper>
        <Styled.Avatar alt="avatar" src="/images/avatar.png" />
        <Styled.Title>Edit Avatar</Styled.Title>
      </Styled.AvatarWrapper>
      <Styled.InputContainer>
        <Styled.InputWrapper>
          <Styled.Label>
            First name
            <Styled.Input
              name="firstname"
              type="text"
              value={newTeamMember.firstname ?? ""}
              required
              onChange={(event) => handleChange("firstname", event)}
              onBlur={handleBlur}
            />
          </Styled.Label>
          <Styled.Label>
            Last name
            <Styled.Input
              name="lastname"
              type="text"
              value={newTeamMember.lastname ?? ""}
              onChange={(event) => handleChange("lastname", event)}
              required
              onBlur={handleBlur}
            />
          </Styled.Label>
        </Styled.InputWrapper>
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Styled.Label>
          E-mail adress
          <Styled.Input
            name="email"
            type="text"
            value={newTeamMember.email ?? ""}
            onChange={(event) => handleChange("email", event)}
            required
            onBlur={handleBlur}
          />
        </Styled.Label>
        <Styled.Label>
          Label
          <Styled.Input type="text" />
        </Styled.Label>
        <Styled.Label>
          Current Client
          <Styled.Input
            name="client"
            type="text"
            value={newTeamMember.client ?? ""}
            onChange={(event) => handleChange("client", event)}
            required
            onBlur={handleBlur}
          />
        </Styled.Label>
        {!isFormValid && <Styled.Span>* You must fill in all of the fields!</Styled.Span>}
      </Styled.InputContainer>
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" onClick={handleModal} />
        <Button label="Add Humanoid" disabled={!isFormValid} onClick={handleSubmit} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
