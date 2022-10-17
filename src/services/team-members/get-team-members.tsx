import * as Types from "../../types/types";

export async function getTeamMembers(): Promise<Types.TeamFormProps[] | Error> {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/teamMembers`)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      return error;
    });
}
