import * as Types from "../../types/types";

export async function getTimeEntries(): Promise<Types.EntryProps[] | Error> {
  return fetch("http://localhost:3004/timeEntries/test")
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
