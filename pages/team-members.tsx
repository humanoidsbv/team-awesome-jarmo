import React, { useState } from "react";
import { SubHeader } from "../src/components/sub-header";
import { TeamMemberEntries } from "../src/components/team-member-entries";
import { TeamProvider } from "../src/components/context/TeamContextProvider";
import * as Types from "../src/types/types";
import { client } from "../src/services/apollo-client/apollo-client";
import { GET_TEAM_MEMBERS } from "../src/graphql/team-members/members";

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: GET_TEAM_MEMBERS,
  });

  return {
    props: {
      initialTeamMembers: data.allTeamMembers,
    },
  };
};

const TeamMembers = ({ initialTeamMembers, initialFormValues }: Types.AtBuildTeamProps) => {
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

export default TeamMembers;
