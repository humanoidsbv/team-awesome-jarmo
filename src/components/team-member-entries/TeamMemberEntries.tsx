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

  const filterClients = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClient(event?.target.value);
  };

  const onlyClients = teamMembers.map((entry) => entry.client);

  const uniqueClients = onlyClients.filter((client, index) => {
    return onlyClients.indexOf(client) === index;
  });

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Label>Filter by client: </Styled.Label>
        <Styled.Select value={selectedClient} onChange={filterClients}>
          <option value="">--Choose a client--</option>
          {uniqueClients.map((entry) => (
            <option value={entry} label={entry} key={entry} />
          ))}
        </Styled.Select>
      </Styled.Container>

      {teamMembers
        .filter((member) => selectedClient === "" || member.client === selectedClient)
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
