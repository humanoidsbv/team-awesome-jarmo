"use client";

import React, { useState } from "react";
import { SubHeader } from "../../src/components/sub-header";
import { TeamMemberEntries } from "../../src/components/team-member-entries";
import { getTeamMembers } from "../../src/services/team-members/get-team-members";
import { TeamProvider } from "../../src/components/context/TeamContextProvider";
import * as Types from "../../src/types/types";

async function fetchData() {
  const initialTeamMembers = await getTeamMembers();
  return {
    props: {
      initialTeamMembers,
    },
  };
}

const TeamPage = ({ initialTeamMembers, initialFormValues }: Types.AtBuildTeamProps) => {
  fetchData();
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <TeamProvider initialTeamMembers={initialTeamMembers}>
      <SubHeader
        title="Teammembers"
        amount={initialTeamMembers.length}
        subtitle="Humanoids"
        handleModal={handleModal}
      />
      <TeamMemberEntries
        initialTeamMembers={initialTeamMembers}
        isModalActive={isModalActive}
        handleModal={handleModal}
        initialFormValues={initialFormValues}
      />
    </TeamProvider>
  );
};

export default TeamPage;
