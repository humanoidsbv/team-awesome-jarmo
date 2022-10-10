import React, { useState, Dispatch } from "react";

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
  firstname: "",
  lastname: "",
  email: "",
  client: "",
};

export const TeamMemberForm = ({ teamMembers, setTeamMembers, handleModal }: FormInputProps) => {
  const [newTeamMember, setNewTeamMember] = useState<TeamFormProps>(initialFormValues);
  // const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({
      ...newTeamMember,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLElement>) => {
    event.preventDefault();
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
    <Styled.Form>
      <Styled.AvatarWrapper>
        <Styled.Avatar alt="avatar" src="/images/avatar.png" />
        <Styled.Title>Edit Avatar</Styled.Title>
      </Styled.AvatarWrapper>
      <Styled.InputContainer>
        <Styled.Label>
          First name
          <Styled.Input
            name="firstname"
            type="text"
            value={newTeamMember.firstname ?? ""}
            onChange={(event) => handleChange("firstname", event)}
          />
        </Styled.Label>
        <Styled.Label>
          Last name
          <Styled.Input
            name="lastname"
            type="text"
            value={newTeamMember.lastname ?? ""}
            onChange={(event) => handleChange("lastname", event)}
          />
        </Styled.Label>
      </Styled.InputContainer>
      <Styled.InputContainer>
        <Styled.Label>
          E-mail adress
          <Styled.Input
            name="email"
            type="text"
            value={newTeamMember.email ?? ""}
            onChange={(event) => handleChange("email", event)}
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
          />
        </Styled.Label>
      </Styled.InputContainer>
      {/* {!isFormValid && <Styled.Span>* You must fill in all of the fields!</Styled.Span>} */}
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" onClick={handleModal} />
        <Button label="Add Humanoid" onClick={handleSubmit} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
