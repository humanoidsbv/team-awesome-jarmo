import React from "react";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";
import * as Styled from "./TeamMemberEntries.styled";

export const TeamMemberEntries = () => {
  return (
    <Styled.Main>
      <TeamMemberEntry name="Jarmo van der Heul" />
    </Styled.Main>
  );
};
