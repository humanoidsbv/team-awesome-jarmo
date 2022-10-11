import React from "react";

import * as Styled from "./TeamMemberEntry.styled";

interface TeamMemberEntryProps {
  client: string;
  firstname: string;
  lastname: string;
}
export const TeamMemberEntry = ({ firstname, lastname, client }: TeamMemberEntryProps) => {
  return (
    <Styled.TeamMember>
      <Styled.Profile>
        <Styled.Avatar alt="avatar" src="/images/avatar.png" />
        <Styled.Wrapper>
          <Styled.Title>
            {firstname} {lastname}
          </Styled.Title>
          <Styled.Role>Front-end Developer</Styled.Role>
        </Styled.Wrapper>
      </Styled.Profile>
      <Styled.JobDescription>
        <Styled.Wrapper>
          <Styled.Title>{client}</Styled.Title>
          <Styled.Label>client</Styled.Label>
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Styled.Title>Februari 2022</Styled.Title>
          <Styled.Label>Starting Time</Styled.Label>
        </Styled.Wrapper>
      </Styled.JobDescription>
    </Styled.TeamMember>
  );
};
