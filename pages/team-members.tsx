import React from "react";
import { SubHeader } from "../src/components/sub-header";
import { TeamMemberEntries } from "../src/components/team-member-entries";

const TeamMembers = () => {
  return (
    <>
      <SubHeader title="Teammembers" amount={0} subtitle="Humanoids" />
      <TeamMemberEntries />
    </>
  );
};

export default TeamMembers;
