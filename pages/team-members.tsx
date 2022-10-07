import React, { useState } from "react";
import { SubHeader } from "../src/components/sub-header";
import { TeamMemberEntries } from "../src/components/team-member-entries";

const TeamMembers = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <SubHeader title="Teammembers" amount={0} subtitle="Humanoids" handleModal={handleModal} />
      <TeamMemberEntries isModalActive={isModalActive} handleModal={handleModal} />
    </>
  );
};

export default TeamMembers;
