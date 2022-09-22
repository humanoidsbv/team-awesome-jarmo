import * as Classes from "../../classes/classes";
import * as Types from "../../types/types";

export async function getTimeEntries(): Promise<Types.EntryProps[]> {
  return fetch("http://localhost:3004/time-entries")
    .then(async (response) => {
      if (response.status === 404) {
        throw new Classes.NotFoundError(await response.json());
      }

      return response.json();
    })
    .catch((error) => {
      if (error instanceof Classes.NotFoundError) {
        // eslint-disable-next-line no-console
        console.log("error");
      }
    });
}
