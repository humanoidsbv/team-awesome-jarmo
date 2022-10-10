import React, { useContext, useState } from "react";

import { Modal } from "../modal/Modal";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";
import { TeamMemberForm } from "../team-member-form";
import * as Types from "../../types/types";
import { TeamContext } from "../context/TeamContextProvider";

import * as Styled from "./TeamMemberEntries.styled";

export const TeamMemberEntries = ({ isModalActive, handleModal }: Types.AtBuildTeamProps) => {
  const { teamMembers, setTeamMembers } = useContext(TeamContext);
  const [selectedClient, setSelectedClient] = useState("");

  const filterClients = (event) => {
    setSelectedClient(event?.target.value);
    console.log("changed");
  };

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Label>Filter by client: </Styled.Label>
        <Styled.Select value={selectedClient} onChange={filterClients}>
          <option value="">--Choose a client--</option>
          {teamMembers.map((teamMember) => (
            <option value={teamMember.client} label={teamMember.client} key={teamMember.id} />
          ))}
        </Styled.Select>
      </Styled.Container>

      {teamMembers
        .filter((member) => member.client === selectedClient)
        .map((teamMember) => (
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
