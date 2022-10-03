import { EntryProps } from "../../types/types";

export async function PostTimeEntries(newTimeEntry: Promise<EntryProps[] | Error>) {
  return fetch("http://localhost:3004/timeEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTimeEntry),
  })
    .then(async (response) => {
      if (response.status !== 200) {
        throw new Error(await response.json());
      }
    })
    .catch((error) => {
      return error;
    });
}
