import { EntryProps } from "../../types/types";

export async function deleteTimeEntries(entry: EntryProps) {
  const data = await fetch(`http://localhost:3004/timeEntries/${entry.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
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

  return data;
}
