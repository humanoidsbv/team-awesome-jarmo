import { EntryApiProps } from "../../types/types";

export async function postTeamMembers(newTeamMember: EntryApiProps) {
  const data = await fetch("http://localhost:3004/timeEntries", {
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
