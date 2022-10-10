import React, { useState } from "react";

import { Modal } from "../modal/Modal";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";
import { TeamMemberForm } from "../team-member-form";
import * as Types from "../../types/types";

import * as Styled from "./TeamMemberEntries.styled";

export const TeamMemberEntries = ({ isModalActive, handleModal }: Types.AtBuildTeamProps) => {
  const [teamMembers, setTeamMembers] = useState<Types.TeamApiProps[]>([]);

  return (
    <Styled.Main>
      {teamMembers?.map((teamMember) => (
        <TeamMemberEntry
          key={teamMember.id}
          firstname={teamMember.firstname}
          lastname={teamMember.lastname}
          client={teamMember.client}
        />
      ))}

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
