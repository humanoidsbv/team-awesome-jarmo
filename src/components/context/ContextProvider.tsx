import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import * as Types from "../../types/types";

interface EntriesProviderProps {
  children: ReactNode | ReactNode[];
  initialTimeEntries: Types.EntryFormProps[];
}

interface EntriesContextProps {
  timeEntries: Types.EntryApiProps[];
  setTimeEntries: Dispatch<SetStateAction<Types.EntryApiProps[]>>;
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps);

export const EntriesProvider: FC<EntriesProviderProps> = ({ children, initialTimeEntries }) => {
  const [timeEntries, setTimeEntries] = useState(initialTimeEntries);

  const entries = {
    timeEntries,
    setTimeEntries,
  };

  return <EntriesContext.Provider value={entries}>{children}</EntriesContext.Provider>;
};
