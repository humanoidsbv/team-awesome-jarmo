import React, { useState } from "react";
import { SubHeader } from "../src/components/sub-header";
import { TeamMemberEntries } from "../src/components/team-member-entries";
import { getTeamMembers } from "../src/services/team-members";
import * as Types from "../src/types/types";

export const getServerSideProps = async () => {
  const initialTeamMembers = await getTeamMembers();

  return {
    props: { initialTeamMembers },
  };
};

const TeamMembers = ({ initialTeamMembers, initialFormValues }: Types.AtBuildTeamProps) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
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
    </>
  );
};

export default TeamMembers;
