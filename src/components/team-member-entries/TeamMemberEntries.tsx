import React, { useState } from "react";

import { Modal } from "../modal/Modal";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";
import { TeamMemberForm } from "../team-member-form";
import * as Types from "../../types/types";

import * as Styled from "./TeamMemberEntries.styled";

export const TeamMemberEntries = ({ isModalActive, handleModal }: Types.AtBuildProps) => {
  const [teamMembers, setTeamMembers] = useState<Types.TeamApiProps[]>();

  return (
    <Styled.Main>
      <div>
        <TeamMemberEntry firstname="test" lastname="test" client="test" />
      </div>
      <Modal isActive={isModalActive} title="New Humanoid" onClose={() => handleModal()}>
        <TeamMemberForm
          teamMembers={teamMembers}
          setTeamMembers={setTeamMembers}
          handleModal={handleModal}
        />
      </Modal>
    </Styled.Main>
  );
};
