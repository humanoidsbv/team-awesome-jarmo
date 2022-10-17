import { EntryApiProps } from "../../types/types";

export async function deleteTimeEntries(entry: EntryApiProps) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/timeEntries/${entry.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(await response.json());
      }
    })
    .catch((error) => {
      return error;
    });

  return data;
}
