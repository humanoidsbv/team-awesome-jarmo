import * as Types from "../../types/types";

export async function PostTimeEntries(): Promise<Types.EntryProps[] | Error> {
  return fetch("http://localhost:3004/timeEntries", {
    method: "POST",
    body: JSON.stringify({
      id: Math.random(),
      client: "",
      startTime: "",
      endTime: "",
    }),
    headers: {
      "Content-type": "application/json",
    },
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
