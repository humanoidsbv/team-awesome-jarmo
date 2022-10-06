import React from "react";
import * as Styled from "./TeamMemberEntry.styled";

export const TeamMemberEntry = ({ name }) => {
  return (
    <Styled.Container>
      <Styled.Title>{name}</Styled.Title>
      <Styled.DateContainer>
        <Styled.Data>
          <Styled.Time>Tijd - Tijd</Styled.Time>
          <Styled.Hours>08:00</Styled.Hours>
        </Styled.Data>
      </Styled.DateContainer>
    </Styled.Container>
  );
};
