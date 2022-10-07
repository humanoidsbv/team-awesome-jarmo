import React from "react";

import { Modal } from "../modal/Modal";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";
import { TeamMemberForm } from "../team-member-form";
import * as Types from "../../types/types";

import * as Styled from "./TeamMemberEntries.styled";

export const TeamMemberEntries = ({ isModalActive, handleModal }: Types.AtBuildProps) => {
  return (
    <Styled.Main>
      <TeamMemberEntry
        client="Nike"
        date="September 2022"
        jobrole="Front-end Developer"
        name="Jarmo van der Heul"
      />
      <Modal isActive={isModalActive} title="New Humanoid" onClose={() => handleModal()}>
        <TeamMemberForm />
      </Modal>
    </Styled.Main>
  );
};
