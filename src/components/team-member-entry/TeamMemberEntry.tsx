import React from "react";
import * as Styled from "./TeamMemberEntry.styled";

interface TeamMemberEntryProps {
  client: string;
  date: string;
  jobrole: string;
  name: string;
}
export const TeamMemberEntry = ({ client, jobrole, name, date }: TeamMemberEntryProps) => {
  return (
    <Styled.TeamMember>
      <Styled.Profile>
        <Styled.Avatar alt="avatar" src="/images/avatar.png" />
        <Styled.Wrapper>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Role>{jobrole}</Styled.Role>
        </Styled.Wrapper>
      </Styled.Profile>
      <Styled.JobDescription>
        <Styled.Wrapper>
          <Styled.Title>{client}</Styled.Title>
          <Styled.Label>client</Styled.Label>
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Styled.Title>{date}</Styled.Title>
          <Styled.Label>Starting Time</Styled.Label>
        </Styled.Wrapper>
      </Styled.JobDescription>
    </Styled.TeamMember>
  );
};
