"use client";

import React, { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import * as Types from "../../types/types";

interface EntriesProviderProps {
  children: ReactNode | ReactNode[];
  initialTimeEntries: Types.EntryFormProps[];
}

interface EntriesContextProps {
  timeEntries: Types.EntryFormProps[];
  setTimeEntries: Dispatch<SetStateAction<Types.EntryFormProps[]>>;
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
