"use client";

import React, { useContext, useEffect, useState } from "react";

import { Modal } from "../modal/Modal";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";
import { TeamMemberForm } from "../team-member-form";
import * as Types from "../../types/types";
import { TeamContext } from "../context/TeamContextProvider";

import * as Styled from "./TeamMemberEntries.styled";

export const TeamMemberEntries = ({ isModalActive, handleModal }: Types.AtBuildTeamProps) => {
  const { teamMembers, setTeamMembers } = useContext(TeamContext);
  const [selectedClient, setSelectedClient] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortedTeamMembers, setSortedTeamMembers] = useState(teamMembers);

  const filterClients = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClient(event?.target.value);
  };

  const onlyClients = teamMembers.map((entry) => entry.client);
  const uniqueClients = onlyClients.filter((client, index) => {
    return onlyClients.indexOf(client) === index;
  });

  const sortOptions = ["ascending", "descending"];

  const handleSort = () => {
    const sort = teamMembers.sort((a, b) => {
      if (a.lastname < b.lastname) {
        return sortOrder === "ascending" ? 1 : -1;
      }
      if (a.lastname > b.lastname) {
        return sortOrder === "ascending" ? -1 : 1;
      }
      return 0;
    });

    setSortedTeamMembers(sort);
  };

  useEffect(() => {
    handleSort();
  }, [sortOrder, teamMembers]);

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
        <Styled.Label>Sort by name:</Styled.Label>
        <Styled.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option disabled value="">
            --Select option--
          </option>
          {sortOptions.map((label) => (
            <option key={label} label={label} value={label}>
              {label}
            </option>
          ))}
        </Styled.Select>
      </Styled.Container>

      {sortedTeamMembers
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
