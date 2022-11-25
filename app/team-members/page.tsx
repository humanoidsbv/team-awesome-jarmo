import TeamPage from "./TeamPage";

import { getTeamMembers } from "../../src/services/team-members/get-team-members";

async function fetchData() {
  const initialTeamMembers = await getTeamMembers();
  return initialTeamMembers instanceof Error ? [] : initialTeamMembers;
}

const Page = async () => {
  const initialTeamMembers = await fetchData();

  return <TeamPage initialTeamMembers={initialTeamMembers} />;
};

export default Page;
