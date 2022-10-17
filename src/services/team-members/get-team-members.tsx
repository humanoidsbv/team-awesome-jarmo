import * as Types from "../../types/types";

export async function getTeamMembers(): Promise<Types.TeamFormProps[] | Error> {
  return fetch("https://my-json-server.typicode.com/humanoidsbv/team-awesome-jarmo/db")
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
