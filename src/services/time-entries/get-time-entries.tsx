import * as Types from "../../types/types";

export async function getTimeEntries(): Promise<Types.EntryFormProps[] | Error> {
  return fetch("https://my-json-server.typicode.com/humanoidsbv/team-awesome-jarmo/db")
    .then(async (response) => {
      if (response.status !== 200) {
        throw new Error(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      return error;
    });
}
