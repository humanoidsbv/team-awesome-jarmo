import { TeamApiProps } from "../../types/types";

export async function postTeamMembers(newTeamMember: TeamApiProps) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/teamMembers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTeamMember),
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(await response.json());
      }
      return response.json();
    })
    .catch((error) => {
      return error;
    });

  return data;
}
