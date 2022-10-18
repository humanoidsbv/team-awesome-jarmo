import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { Button } from "../button/Button";
import * as Types from "../../types/types";
import * as Styled from "./TeamMemberForm.styled";
import { ADD_TEAM_MEMBER } from "../../graphql/team-members/mutations";

const initialFormValues = {
  client: "",
  email: "",
  firstname: "",
  lastname: "",
};

export const TeamMemberForm = ({ handleModal }: Types.FormInputProps) => {
  const [newTeamMember, setNewTeamMember] = useState<Types.TeamFormProps>(initialFormValues);

  const [addTeamMember] = useMutation(ADD_TEAM_MEMBER);

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamMember({
      ...newTeamMember,
      [key]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const { firstname, lastname, email, client } = newTeamMember;

    await addTeamMember({
      variables: {
        firstname,
        lastname,
        email,
        client,
      },
    });

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
      <Styled.ButtonContainer>
        <Button label="cancel" variant="secondary" onClick={handleModal} />
        <Button label="Add Humanoid" onClick={handleSubmit} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
